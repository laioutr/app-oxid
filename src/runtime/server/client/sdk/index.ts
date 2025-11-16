import { GraphQLClient } from 'graphql-request';
import { H3Event } from 'h3';
import { getCookie, setCookie } from '#imports';
import { CategoryNotFoundError } from '@laioutr-core/canonical-types/ecommerce';
import {
  BasketAddItemMutationMutation,
  BasketCreateMutationMutation,
  BasketQueryQuery,
  CategoriesQueryQuery,
  ManufacturerQueryQuery,
  ProductQueryQuery,
  ProductsQueryQuery,
  TokenQueryQuery,
  VendorQueryQuery,
} from '~/src/generated/types';
import { extractSlugFromSeo } from '../../utils/oxid';
import { BasketAddItemMutation, BasketCreateMutation } from '../mutations/basket';
import { BasketQuery } from '../queries/basket';
import { CategoriesQuery } from '../queries/categories';
import { ManufacturerQuery } from '../queries/manufacturer';
import { ProductQuery, ProductsQuery } from '../queries/products';
import { TokenQuery } from '../queries/token';
import { VendorQuery } from '../queries/vendor';
import { ProductFlags } from '../types/flags';

export class OxidSDK {
  private graphqlURL: string;

  private accessToken = '';

  private get client() {
    return new GraphQLClient(this.graphqlURL, {
      headers: {
        'Content-Type': 'application/json',
        ...(this.accessToken ? { Authorization: `Bearer ${this.accessToken}` } : {}),
      },
    });
  }

  constructor(graphqlURL: string) {
    this.graphqlURL = graphqlURL;
  }

  /* Auth */
  async login(user: string, pass: string) {
    const { token } = await this.client.request<TokenQueryQuery>(TokenQuery, { user, pass });
    this.accessToken = token;
  }

  /* Categories */
  async listCategories() {
    return this.client.request<CategoriesQueryQuery>(CategoriesQuery);
  }

  /* Manufacturers */
  async listManufacturers() {
    return this.client.request<ManufacturerQueryQuery>(ManufacturerQuery);
  }

  /* Vendors */
  async listVendors() {
    return this.client.request<VendorQueryQuery>(VendorQuery);
  }

  /* Products */
  private resolveProductQueryParams({
    filter,
    pagination,
    sort,
  }: { filter?: string; pagination?: { offset?: number; limit?: number }; sort?: string } = {}) {
    const [sortKey, sortDirection] = sort?.split(':') ?? ':';

    return {
      ...(sortKey && sortDirection ? { sort: { [sortKey]: sortDirection } } : {}),
      ...(pagination ? { pagination: { offset: pagination.offset, limit: pagination.limit } } : {}),
    };
  }

  async getProductById(productId: string, flags: ProductFlags = {}) {
    return this.client.request<ProductQueryQuery>(ProductQuery, { productId, ...flags });
  }

  async getProductsByCategoryId(
    categoryId: string,
    queryParams?: Parameters<typeof this.resolveProductQueryParams>[0],
    flags: ProductFlags = {}
  ) {
    const qp = this.resolveProductQueryParams(queryParams);

    return this.client.request<ProductsQueryQuery>(ProductsQuery, { filters: { category: { equals: categoryId } }, ...qp, ...flags });
  }

  async getProductsByCategorySlug(
    categorySlug: string,
    queryParams?: Parameters<typeof this.resolveProductQueryParams>[0],
    flags: ProductFlags = {}
  ) {
    const { categories } = await this.listCategories();

    const category = categories.find((c) => extractSlugFromSeo(c.seo) === categorySlug);

    if (!category) throw new CategoryNotFoundError(categorySlug);

    return this.getProductsByCategoryId(category.id, queryParams, flags);
  }

  /* Baskets */
  async getBasketById(basketId: string, flags: ProductFlags = {}) {
    return this.client.request<BasketQueryQuery>(BasketQuery, { basketId, ...flags });
  }

  async assertCurrentBasketExists({ event }: { event: H3Event }) {
    let basketId = getCookie(event, 'oxid-basket-id');

    if (!basketId) {
      const { basketCreate } = await this.client.request<BasketCreateMutationMutation>(BasketCreateMutation, {
        basket: { title: `default_${Date.now()}` },
      });

      basketId = basketCreate.id;

      setCookie(event, 'oxid-basket-id', basketId, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
    }

    return basketId;
  }

  async getCurrentBasket({ event, flags = {} }: { event: H3Event; flags?: ProductFlags }) {
    const basketId = await this.assertCurrentBasketExists({ event });
    return this.getBasketById(basketId, flags);
  }

  async addItemToBasket({ basketId, productId, amount }: { basketId: string; productId: string; amount: number }) {
    return this.client.request<BasketAddItemMutationMutation>(BasketAddItemMutation, { basketId, productId, amount });
  }
}
