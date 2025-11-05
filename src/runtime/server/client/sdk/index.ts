import { GraphQLClient } from 'graphql-request';
import { CategoryNotFoundError } from '@laioutr-core/canonical-types/ecommerce';
import { CategoriesQueryQuery, ProductsQueryQuery, TokenQueryQuery } from '~/src/generated/types';
import { extractSlugFromSeo } from '../../utils/oxid';
import { CategoriesQuery } from '../queries/categories';
import { ProductsQuery } from '../queries/products';
import { TokenQuery } from '../queries/token';

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

  async getProductsByCategoryId(categoryId: string, queryParams?: Parameters<typeof this.resolveProductQueryParams>[0]) {
    const qp = this.resolveProductQueryParams(queryParams);

    return this.client.request<ProductsQueryQuery>(ProductsQuery, { filters: { category: { equals: categoryId } }, ...qp });
  }

  async getProductsByCategorySlug(categorySlug: string, queryParams?: Parameters<typeof this.resolveProductQueryParams>[0]) {
    const { categories } = await this.listCategories();

    const category = categories.find((c) => extractSlugFromSeo(c.seo) === categorySlug);

    if (!category) throw new CategoryNotFoundError(categorySlug);

    return this.getProductsByCategoryId(category.id, queryParams);
  }
}
