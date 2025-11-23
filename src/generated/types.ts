export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AbstractComponentDataType = AbstractComponentDataTypeInterface & ComponentDataTypeInterface & {
  __typename?: 'AbstractComponentDataType';
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type AbstractComponentDataTypeInterface = {
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type Action = {
  __typename?: 'Action';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  products: Array<Product>;
  title: Scalars['String']['output'];
};

export type ActionFilterList = {
  actionId?: InputMaybe<StringFilterInput>;
};

export type Attribute = {
  __typename?: 'Attribute';
  title: Scalars['String']['output'];
};

export type AttributeFilterList = {
  title?: InputMaybe<StringFilterInput>;
};

export type Banner = {
  __typename?: 'Banner';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  product?: Maybe<Product>;
  sorting: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};


export type BannerActiveArgs = {
  now?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Basket = {
  __typename?: 'Basket';
  cost: BasketCost;
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  deliveryAddress?: Maybe<DeliveryAddress>;
  /** Returns selected delivery method for current basket. */
  deliveryMethod?: Maybe<DeliveryMethodInterface>;
  id: Scalars['ID']['output'];
  items: Array<BasketItem>;
  lastUpdateDate?: Maybe<Scalars['DateTime']['output']>;
  owner?: Maybe<BasketOwner>;
  /** Returns selected payment for current basket. */
  payment?: Maybe<PaymentInterface>;
  public: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  vouchers: Array<Voucher>;
};


export type BasketItemsArgs = {
  pagination?: InputMaybe<PaginationFilterInput>;
};

export type BasketCost = {
  __typename?: 'BasketCost';
  currency: Currency;
  delivery: Price;
  discount: Scalars['Float']['output'];
  payment: Price;
  productGross: BasketProductBruttoSum;
  productNet: Price;
  total: Scalars['Float']['output'];
  voucher: Scalars['Float']['output'];
};

export type BasketDeliveryMethod = DeliveryMethodInterface & {
  __typename?: 'BasketDeliveryMethod';
  cost: Price;
  id: Scalars['ID']['output'];
  paymentTypes: Array<BasketPayment>;
  position: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type BasketInput = {
  public?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};

export type BasketItem = {
  __typename?: 'BasketItem';
  amount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lastUpdateDate?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<Product>;
};

export type BasketOwner = {
  __typename?: 'BasketOwner';
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type BasketPayment = PaymentInterface & {
  __typename?: 'BasketPayment';
  active: Scalars['Boolean']['output'];
  cost: Price;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updated?: Maybe<Scalars['DateTime']['output']>;
};

export type BasketProductBruttoSum = {
  __typename?: 'BasketProductBruttoSum';
  sum: Scalars['Float']['output'];
  vats: Array<BasketProductVats>;
};

export type BasketProductVats = {
  __typename?: 'BasketProductVats';
  vatPrice: Scalars['Float']['output'];
  vatRate: Scalars['Float']['output'];
};

export type BoolFilterInput = {
  equals: Scalars['Boolean']['input'];
};

export type BooleanSetting = {
  __typename?: 'BooleanSetting';
  /** Field of Configuration Access module's BooleanSetting-Type */
  name: Scalars['String']['output'];
  /** Field of Configuration Access module's BooleanSetting-Type */
  value: Scalars['Boolean']['output'];
};

export type Category = {
  __typename?: 'Category';
  active: Scalars['Boolean']['output'];
  attributes: Array<CategoryAttribute>;
  children: Array<Category>;
  /** If the external link is specified it will be opened instead of category content */
  externalLink: Scalars['String']['output'];
  /**
   * Hidden categories are not visible in lists and menu,
   * but can be accessed by direct link
   */
  hidden: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  longDescription: Scalars['String']['output'];
  parent?: Maybe<Category>;
  /**
   * Defines the order in which categories are displayed:
   * The category with the lowest number is displayed at the top,
   * and the category with the highest number at the bottom
   */
  position: Scalars['Int']['output'];
  /**
   * If specified, all products, with price higher than specified,
   * will be shown in this category
   */
  priceFrom: Scalars['Float']['output'];
  /**
   * If specified, all products, with price lower than specified,
   * will be shown in this category
   */
  priceTo: Scalars['Float']['output'];
  products: Array<Product>;
  promotionIcon?: Maybe<Scalars['String']['output']>;
  root?: Maybe<Category>;
  seo: Seo;
  shortDescription: Scalars['String']['output'];
  showSuffix: Scalars['Boolean']['output'];
  /**
   * Skip all negative discounts for products in this category
   * (Discounts, Vouchers, Delivery ...)
   */
  skipDiscount: Scalars['Boolean']['output'];
  template: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  vat?: Maybe<Scalars['Float']['output']>;
};


export type CategoryActiveArgs = {
  now?: InputMaybe<Scalars['DateTime']['input']>;
};


export type CategoryProductsArgs = {
  pagination?: InputMaybe<PaginationFilterInput>;
  sort?: InputMaybe<ProductSorting>;
};

export type CategoryAttribute = {
  __typename?: 'CategoryAttribute';
  attribute: Attribute;
  values: Array<Scalars['String']['output']>;
};

export type CategoryFilterList = {
  parentId?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type CategoryIdFilterInput = {
  equals: Scalars['ID']['input'];
};

export type CategorySorting = {
  position?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentDataTypeImpl = ComponentDataTypeInterface & {
  __typename?: 'ComponentDataTypeImpl';
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type ComponentDataTypeInterface = {
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type ComponentFilters = {
  active?: InputMaybe<BoolFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ContactRequestInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type Content = {
  __typename?: 'Content';
  active: Scalars['Boolean']['output'];
  category?: Maybe<Category>;
  /** Returns rendered HTML string that might contain script and style tags */
  content: Scalars['String']['output'];
  folder: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Return not rendered, raw content */
  rawContent: Scalars['String']['output'];
  seo: Seo;
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type ContentFilterList = {
  folder?: InputMaybe<StringFilterInput>;
};

export type Country = {
  __typename?: 'Country';
  active: Scalars['Boolean']['output'];
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isoAlpha2: Scalars['String']['output'];
  isoAlpha3: Scalars['String']['output'];
  isoNumeric: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  states: Array<State>;
  title: Scalars['String']['output'];
};


export type CountryStatesArgs = {
  sort?: InputMaybe<StateSorting>;
};

export type CountryFilterList = {
  title?: InputMaybe<StringFilterInput>;
};

export type CountrySorting = {
  position?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Currency = {
  __typename?: 'Currency';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
  sign: Scalars['String']['output'];
};

export type Customer = {
  __typename?: 'Customer';
  basket: Basket;
  baskets: Array<Basket>;
  birthdate?: Maybe<Scalars['DateTime']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  customerNumber: Scalars['String']['output'];
  deliveryAddresses: Array<DeliveryAddress>;
  email: Scalars['String']['output'];
  files: Array<OrderFile>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  invoiceAddress: InvoiceAddress;
  lastName: Scalars['String']['output'];
  newsletterStatus?: Maybe<NewsletterStatus>;
  orders: Array<Order>;
  points: Scalars['Int']['output'];
  registered?: Maybe<Scalars['DateTime']['output']>;
  reviews: Array<Review>;
  updated?: Maybe<Scalars['DateTime']['output']>;
};


export type CustomerBasketArgs = {
  title: Scalars['String']['input'];
};


export type CustomerOrdersArgs = {
  pagination?: InputMaybe<PaginationFilterInput>;
};

export type CustomerInput = {
  birthdate?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type DateFilterInput = {
  between?: InputMaybe<Array<Scalars['String']['input']>>;
  equals?: InputMaybe<Scalars['String']['input']>;
};

export type DeliveryAddress = {
  __typename?: 'DeliveryAddress';
  additionalInfo: Scalars['String']['output'];
  city: Scalars['String']['output'];
  company: Scalars['String']['output'];
  country?: Maybe<Country>;
  fax: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  salutation: Scalars['String']['output'];
  state?: Maybe<State>;
  street: Scalars['String']['output'];
  streetNumber: Scalars['String']['output'];
  updated?: Maybe<Scalars['DateTime']['output']>;
  zipCode: Scalars['String']['output'];
};

export type DeliveryMethod = DeliveryMethodInterface & {
  __typename?: 'DeliveryMethod';
  id: Scalars['ID']['output'];
  paymentTypes: Array<BasketPayment>;
  position: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type DeliveryMethodInterface = {
  id: Scalars['ID']['output'];
  paymentTypes: Array<BasketPayment>;
  position: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type DeliveryProvider = {
  __typename?: 'DeliveryProvider';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type File = {
  __typename?: 'File';
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  onlyPaidDownload: Scalars['Boolean']['output'];
  product: Product;
};

export type FloatSetting = {
  __typename?: 'FloatSetting';
  /** Field of Configuration Access module's FloatSetting-Type */
  name: Scalars['String']['output'];
  /** Field of Configuration Access module's FloatSetting-Type */
  value: Scalars['Float']['output'];
};

export type IdFilterInput = {
  equals: Scalars['ID']['input'];
};

export type Inquirer = {
  __typename?: 'Inquirer';
  firstName: Scalars['String']['output'];
};

export type IntegerSetting = {
  __typename?: 'IntegerSetting';
  /** Field of Configuration Access module's IntegerSetting-Type */
  name: Scalars['String']['output'];
  /** Field of Configuration Access module's IntegerSetting-Type */
  value: Scalars['Int']['output'];
};

export type InvoiceAddress = {
  __typename?: 'InvoiceAddress';
  additionalInfo: Scalars['String']['output'];
  city: Scalars['String']['output'];
  company: Scalars['String']['output'];
  country?: Maybe<Country>;
  created?: Maybe<Scalars['DateTime']['output']>;
  fax: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  salutation: Scalars['String']['output'];
  state?: Maybe<State>;
  street: Scalars['String']['output'];
  streetNumber: Scalars['String']['output'];
  updated?: Maybe<Scalars['DateTime']['output']>;
  vatID: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
};

export type Link = {
  __typename?: 'Link';
  active: Scalars['Boolean']['output'];
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type LinkFilterList = {
  description?: InputMaybe<StringFilterInput>;
};

export type Login = LoginInterface & {
  __typename?: 'Login';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type LoginImpl = LoginInterface & {
  __typename?: 'LoginImpl';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type LoginInterface = {
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  active: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images: ManufacturerImage;
  products: Array<Product>;
  seo: Seo;
  shortdesc: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
};


export type ManufacturerProductsArgs = {
  pagination?: InputMaybe<PaginationFilterInput>;
  sort?: InputMaybe<ProductSorting>;
};

export type ManufacturerFilterList = {
  title?: InputMaybe<StringFilterInput>;
};

export type ManufacturerImage = {
  __typename?: 'ManufacturerImage';
  alt: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  promotion: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
};

export type ManufacturerSorting = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ModuleDataType = AbstractComponentDataTypeInterface & ComponentDataTypeInterface & ModuleDataTypeInterface & {
  __typename?: 'ModuleDataType';
  active: Scalars['Boolean']['output'];
  author: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lang: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type ModuleDataTypeImpl = ModuleDataTypeInterface & {
  __typename?: 'ModuleDataTypeImpl';
  active: Scalars['Boolean']['output'];
  author: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lang: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type ModuleDataTypeInterface = {
  active: Scalars['Boolean']['output'];
  author: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lang: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Mutation of Configuration Access Module */
  activateModule: Scalars['Boolean']['output'];
  basketAddItem: Basket;
  basketAddVoucher: Basket;
  basketCreate: Basket;
  basketRemoveItem: Basket;
  basketRemoveVoucher: Basket;
  contactRequest: Scalars['Boolean']['output'];
  customerPasswordForgotRequest: Scalars['Boolean']['output'];
  customerPasswordReset: Scalars['Boolean']['output'];
  customerRegister: Customer;
  /**
   * Mutation of Base Module.
   * Invalidate all tokens per customer.
   *  - Customer with right INVALIDATE_ANY_TOKEN can invalidate tokens for any customer Id.
   *  - Customer without special rights can invalidate only own tokens.
   * If no customerId is supplied, own Id is taken.
   */
  customerTokensDelete: Scalars['Int']['output'];
  /** Mutation of Configuration Access Module */
  deactivateModule: Scalars['Boolean']['output'];
  /** Mutation of Configuration Access Module */
  moduleSettingBooleanChange: BooleanSetting;
  /** Mutation of Configuration Access Module */
  moduleSettingCollectionChange: StringSetting;
  /** Mutation of Configuration Access Module */
  moduleSettingFloatChange: FloatSetting;
  /** Mutation of Configuration Access Module */
  moduleSettingIntegerChange: IntegerSetting;
  /** Mutation of Configuration Access Module */
  moduleSettingStringChange: StringSetting;
  newsletterOptIn: NewsletterStatus;
  /**
   * NewsletterStatusSubscribeInput input fields are optional in case of token.
   * - If token exists without NewsletterStatusSubscribeInput, token email will be subscribed.
   *   If token user is already subscribed, status will not be changed and no optin mail is sent.
   * - If token and NewsletterStatusSubscribeInput exists, input email will be subscribed.
   *   If input email user is already subscribed, status will be changed to 2 and
   *   optin mail is sent depending on shop config parameter blOrderOptInEmail.
   * - If only NewsletterStatusSubscribeInput exists, input email will be subscribed.
   *   If input email user is already subscribed, status will be changed to 2 and
   *   optin mail is sent depending on shop config parameter blOrderOptInEmail.
   *
   * If user account for email and shop exists, input fields are overruled by existing user data.
   * If user account for email and shop does not exist, new user will be created (no password, mininal data)
   */
  newsletterSubscribe: NewsletterStatus;
  /**
   * NewsletterStatusUnsubscribeInput email field is optional.
   * In case of missing input email but available token, newsletter will be unsubscribed for token email.
   * Input email is preferred over token email.
   */
  newsletterUnsubscribe: Scalars['Boolean']['output'];
  placeOrder: Order;
  /**
   * Mutation of Base Module.
   * Regenerates the JWT signature key.
   * This will invalidate all issued tokens for the current shop.
   * Only use if no other option is left.
   * REGENERATE_SIGNATURE_KEY right is required.
   */
  regenerateSignatureKey: Scalars['Boolean']['output'];
  /** Mutation of Configuration Access Module */
  shopSettingAssocCollectionChange: StringSetting;
  /** Mutation of Configuration Access Module */
  shopSettingBooleanChange: BooleanSetting;
  /** Mutation of Configuration Access Module */
  shopSettingCollectionChange: StringSetting;
  /** Mutation of Configuration Access Module */
  shopSettingFloatChange: FloatSetting;
  /** Mutation of Configuration Access Module */
  shopSettingIntegerChange: IntegerSetting;
  /** Mutation of Configuration Access Module */
  shopSettingSelectChange: StringSetting;
  /** Mutation of Configuration Access Module */
  shopSettingStringChange: StringSetting;
  /**
   * Mutation of Base Module.
   * Invalidate all tokens for current shop.
   * INVALIDATE_ANY_TOKEN right is required.
   */
  shopTokensDelete: Scalars['Int']['output'];
  /** Mutation of Configuration Access Module */
  switchTheme: Scalars['Boolean']['output'];
  /** Mutation of Configuration Access Module */
  themeSettingAssocCollectionChange: StringSetting;
  /** Mutation of Configuration Access Module */
  themeSettingBooleanChange: BooleanSetting;
  /** Mutation of Configuration Access Module */
  themeSettingCollectionChange: StringSetting;
  /** Mutation of Configuration Access Module */
  themeSettingFloatChange: FloatSetting;
  /** Mutation of Configuration Access Module */
  themeSettingIntegerChange: IntegerSetting;
  /** Mutation of Configuration Access Module */
  themeSettingSelectChange: StringSetting;
  /** Mutation of Configuration Access Module */
  themeSettingStringChange: StringSetting;
  /**
   * Mutation of Base Module.
   * Invalidate specific token.
   * - Customer with right INVALIDATE_ANY_TOKEN can invalidate any token.
   * - Customer without special rights can invalidate only own token.
   */
  tokenDelete: Scalars['Boolean']['output'];
};


export type MutationActivateModuleArgs = {
  moduleId: Scalars['String']['input'];
};


export type MutationBasketAddItemArgs = {
  amount: Scalars['Float']['input'];
  basketId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationBasketAddVoucherArgs = {
  basketId: Scalars['ID']['input'];
  voucherNumber: Scalars['String']['input'];
};


export type MutationBasketCreateArgs = {
  basket: BasketInput;
};


export type MutationBasketRemoveItemArgs = {
  amount: Scalars['Float']['input'];
  basketId: Scalars['ID']['input'];
  basketItemId: Scalars['ID']['input'];
};


export type MutationBasketRemoveVoucherArgs = {
  basketId: Scalars['ID']['input'];
  voucherId: Scalars['ID']['input'];
};


export type MutationContactRequestArgs = {
  request?: InputMaybe<ContactRequestInput>;
};


export type MutationCustomerPasswordForgotRequestArgs = {
  email: Scalars['String']['input'];
};


export type MutationCustomerPasswordResetArgs = {
  newPassword: Scalars['String']['input'];
  repeatPassword: Scalars['String']['input'];
  updateHash: Scalars['String']['input'];
};


export type MutationCustomerRegisterArgs = {
  customer: CustomerInput;
};


export type MutationCustomerTokensDeleteArgs = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeactivateModuleArgs = {
  moduleId: Scalars['String']['input'];
};


export type MutationModuleSettingBooleanChangeArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Boolean']['input'];
};


export type MutationModuleSettingCollectionChangeArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationModuleSettingFloatChangeArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};


export type MutationModuleSettingIntegerChangeArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};


export type MutationModuleSettingStringChangeArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationNewsletterOptInArgs = {
  newsletterStatus: NewsletterStatusInput;
};


export type MutationNewsletterSubscribeArgs = {
  newsletterStatus?: InputMaybe<NewsletterStatusSubscribeInput>;
};


export type MutationNewsletterUnsubscribeArgs = {
  newsletterStatus?: InputMaybe<NewsletterStatusUnsubscribeInput>;
};


export type MutationPlaceOrderArgs = {
  basketId: Scalars['ID']['input'];
  confirmTermsAndConditions?: InputMaybe<Scalars['Boolean']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
};


export type MutationShopSettingAssocCollectionChangeArgs = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationShopSettingBooleanChangeArgs = {
  name: Scalars['String']['input'];
  value: Scalars['Boolean']['input'];
};


export type MutationShopSettingCollectionChangeArgs = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationShopSettingFloatChangeArgs = {
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};


export type MutationShopSettingIntegerChangeArgs = {
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};


export type MutationShopSettingSelectChangeArgs = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationShopSettingStringChangeArgs = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationSwitchThemeArgs = {
  themeId: Scalars['String']['input'];
};


export type MutationThemeSettingAssocCollectionChangeArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationThemeSettingBooleanChangeArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  value: Scalars['Boolean']['input'];
};


export type MutationThemeSettingCollectionChangeArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationThemeSettingFloatChangeArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};


export type MutationThemeSettingIntegerChangeArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};


export type MutationThemeSettingSelectChangeArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationThemeSettingStringChangeArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationTokenDeleteArgs = {
  tokenId: Scalars['ID']['input'];
};

export type NewsletterStatus = {
  __typename?: 'NewsletterStatus';
  email: Scalars['String']['output'];
  failedEmailCount: Scalars['Int']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  salutation: Scalars['String']['output'];
  status: Scalars['String']['output'];
  subscribed?: Maybe<Scalars['DateTime']['output']>;
  unsubscribed?: Maybe<Scalars['DateTime']['output']>;
  updated?: Maybe<Scalars['DateTime']['output']>;
};

export type NewsletterStatusInput = {
  confirmCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type NewsletterStatusSubscribe = {
  __typename?: 'NewsletterStatusSubscribe';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  salutation: Scalars['String']['output'];
};

export type NewsletterStatusSubscribeInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterStatusUnsubscribe = {
  __typename?: 'NewsletterStatusUnsubscribe';
  email: Scalars['String']['output'];
};

export type NewsletterStatusUnsubscribeInput = {
  email: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  cancelled: Scalars['Boolean']['output'];
  cost: OrderCost;
  delivery: OrderDelivery;
  deliveryAddress?: Maybe<OrderDeliveryAddress>;
  files: Array<OrderFile>;
  id: Scalars['ID']['output'];
  invoiceAddress: OrderInvoiceAddress;
  invoiceNumber: Scalars['Int']['output'];
  invoiced?: Maybe<Scalars['DateTime']['output']>;
  items: Array<OrderItem>;
  orderNumber: Scalars['Int']['output'];
  ordered?: Maybe<Scalars['DateTime']['output']>;
  paid?: Maybe<Scalars['DateTime']['output']>;
  payment?: Maybe<OrderPayment>;
  remark: Scalars['String']['output'];
  updated?: Maybe<Scalars['DateTime']['output']>;
  vouchers: Array<Voucher>;
};

export type OrderCost = {
  __typename?: 'OrderCost';
  currency: Currency;
  delivery: Price;
  discount: Scalars['Float']['output'];
  payment: Price;
  productGross: OrderProductBruttoSum;
  productNet: Price;
  total: Scalars['Float']['output'];
  voucher: Scalars['Float']['output'];
};

export type OrderDelivery = {
  __typename?: 'OrderDelivery';
  dispatched?: Maybe<Scalars['DateTime']['output']>;
  provider: DeliveryProvider;
  trackingNumber: Scalars['String']['output'];
  trackingURL: Scalars['String']['output'];
};

export type OrderDeliveryAddress = {
  __typename?: 'OrderDeliveryAddress';
  additionalInfo: Scalars['String']['output'];
  city: Scalars['String']['output'];
  company: Scalars['String']['output'];
  country?: Maybe<Country>;
  fax: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  salutation: Scalars['String']['output'];
  state?: Maybe<State>;
  street: Scalars['String']['output'];
  streetNumber: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type OrderFile = {
  __typename?: 'OrderFile';
  downloadCount: Scalars['Int']['output'];
  file?: Maybe<File>;
  filename: Scalars['String']['output'];
  firstDownload?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  latestDownload?: Maybe<Scalars['DateTime']['output']>;
  maxDownloadCount: Scalars['Int']['output'];
  url: Scalars['String']['output'];
  valid: Scalars['Boolean']['output'];
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderInvoiceAddress = {
  __typename?: 'OrderInvoiceAddress';
  additionalInfo: Scalars['String']['output'];
  city: Scalars['String']['output'];
  company: Scalars['String']['output'];
  country?: Maybe<Country>;
  email: Scalars['String']['output'];
  fax: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  salutation: Scalars['String']['output'];
  state?: Maybe<State>;
  street: Scalars['String']['output'];
  streetNumber: Scalars['String']['output'];
  vatID: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  amount: Scalars['Float']['output'];
  bundle: Scalars['Boolean']['output'];
  cancelled: Scalars['Boolean']['output'];
  dimensions: ProductDimensions;
  id: Scalars['ID']['output'];
  insert: Scalars['DateTime']['output'];
  itemPrice: Price;
  price: Price;
  product?: Maybe<Product>;
  shortDescription: Scalars['String']['output'];
  sku: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};

export type OrderPayment = {
  __typename?: 'OrderPayment';
  id: Scalars['ID']['output'];
  payment?: Maybe<PaymentInterface>;
  updated?: Maybe<Scalars['DateTime']['output']>;
  values: Array<OrderPaymentValue>;
};

export type OrderPaymentValue = {
  __typename?: 'OrderPaymentValue';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type OrderProductBruttoSum = {
  __typename?: 'OrderProductBruttoSum';
  sum: Scalars['Float']['output'];
  vats: Array<OrderProductVats>;
};

export type OrderProductVats = {
  __typename?: 'OrderProductVats';
  vatPrice: Scalars['Float']['output'];
  vatRate: Scalars['Float']['output'];
};

export type PaginationFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Payment = PaymentInterface & {
  __typename?: 'Payment';
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updated?: Maybe<Scalars['DateTime']['output']>;
};

export type PaymentInterface = {
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updated?: Maybe<Scalars['DateTime']['output']>;
};

export type Price = {
  __typename?: 'Price';
  currency: Currency;
  nettoPriceMode: Scalars['Boolean']['output'];
  price: Scalars['Float']['output'];
  vat: Scalars['Float']['output'];
  vatValue: Scalars['Float']['output'];
};

export type Product = {
  __typename?: 'Product';
  accessories: Array<Product>;
  active: Scalars['Boolean']['output'];
  attributes: Array<ProductAttribute>;
  bundleProduct?: Maybe<Product>;
  categories: Array<Category>;
  crossSelling: Array<Product>;
  deliveryTime: ProductDeliveryTime;
  dimensions: ProductDimensions;
  ean: Scalars['String']['output'];
  freeShipping: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  imageGallery: ProductImageGallery;
  insert?: Maybe<Scalars['DateTime']['output']>;
  listPrice?: Maybe<Price>;
  longDescription: Scalars['String']['output'];
  manufacturer?: Maybe<Manufacturer>;
  manufacturerEan: Scalars['String']['output'];
  mpn: Scalars['String']['output'];
  price: Price;
  rating: ProductRating;
  reviews: Array<Review>;
  scalePrices: Array<ProductScalePrice>;
  selectionLists: Array<SelectionList>;
  seo: Seo;
  shortDescription: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  stock: ProductStock;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  unit?: Maybe<ProductUnit>;
  varMinPrice: Scalars['Float']['output'];
  variantLabels: Array<Scalars['String']['output']>;
  variantValues: Array<Scalars['String']['output']>;
  variants: Array<Product>;
  vat: Scalars['Float']['output'];
  vendor?: Maybe<Vendor>;
  wishedPriceEnabled: Scalars['Boolean']['output'];
};


export type ProductCategoriesArgs = {
  onlyMainCategory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  attribute: Attribute;
  value: Scalars['String']['output'];
};

export type ProductDeliveryTime = {
  __typename?: 'ProductDeliveryTime';
  /**
   * Value can be one of:
   * - DAY
   * - WEEK
   * - MONTH
   */
  deliveryTimeUnit: Scalars['String']['output'];
  maxDeliveryTime: Scalars['Int']['output'];
  minDeliveryTime: Scalars['Int']['output'];
};

export type ProductDimensions = {
  __typename?: 'ProductDimensions';
  height: Scalars['Float']['output'];
  length: Scalars['Float']['output'];
  weight: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
};

export type ProductFilterList = {
  category?: InputMaybe<CategoryIdFilterInput>;
  manufacturer?: InputMaybe<IdFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  vendor?: InputMaybe<IdFilterInput>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  icon: Scalars['String']['output'];
  image: Scalars['String']['output'];
  zoom: Scalars['String']['output'];
};

export type ProductImageGallery = {
  __typename?: 'ProductImageGallery';
  icon: Scalars['String']['output'];
  images: Array<ProductImage>;
  thumb: Scalars['String']['output'];
};

export type ProductRating = {
  __typename?: 'ProductRating';
  count: Scalars['Int']['output'];
  rating: Scalars['Float']['output'];
};

export type ProductScalePrice = {
  __typename?: 'ProductScalePrice';
  absolutePrice?: Maybe<Scalars['Float']['output']>;
  /**
   * Whether the scale price is
   * - a new absolute price (you can query that in the `absolutePrice` field)
   * - or a percentage discount (you can query that in the `discount` field)
   */
  absoluteScalePrice: Scalars['Boolean']['output'];
  amountFrom: Scalars['Int']['output'];
  amountTo: Scalars['Int']['output'];
  discount?: Maybe<Scalars['Float']['output']>;
};

export type ProductSorting = {
  minPriceVariant?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  productNumber?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductStock = {
  __typename?: 'ProductStock';
  restockDate?: Maybe<Scalars['DateTime']['output']>;
  stock: Scalars['Float']['output'];
  /**
   * Value can be one of:
   *  0 -> (green) deliverable
   *  1 -> (orange) deliverable, but only a few left
   * -1 -> (red) not stock
   */
  stockStatus: Scalars['Int']['output'];
};

export type ProductUnit = {
  __typename?: 'ProductUnit';
  name: Scalars['String']['output'];
  price: Price;
};

export type Promotion = {
  __typename?: 'Promotion';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PublicBasket = {
  __typename?: 'PublicBasket';
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  items: Array<BasketItem>;
  lastUpdateDate?: Maybe<Scalars['DateTime']['output']>;
  owner: BasketOwner;
  title: Scalars['String']['output'];
};


export type PublicBasketItemsArgs = {
  pagination?: InputMaybe<PaginationFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  action: Action;
  actions: Array<Action>;
  attribute: Attribute;
  attributes: Array<Attribute>;
  banner: Banner;
  banners: Array<Banner>;
  /** Returns information for any basket the customer owns. */
  basket: Basket;
  /**
   * Argument `owner` will be matched exactly against lastname and / or email
   * Query for public baskets by owner.
   */
  baskets: Array<PublicBasket>;
  categories: Array<Category>;
  category: Category;
  content: Content;
  contents: Array<Content>;
  countries: Array<Country>;
  country: Country;
  currencies: Array<Currency>;
  /** If `name` is ommited, gives you the currently active currency */
  currency: Currency;
  link: Link;
  links: Array<Link>;
  /**
   * Query of Base Module.
   * Retrieve a refresh token and access token
   */
  login: LoginInterface;
  manufacturer: Manufacturer;
  manufacturers: Array<Manufacturer>;
  /** Query of Configuration Access Module */
  moduleSettingBoolean: BooleanSetting;
  /** Query of Configuration Access Module */
  moduleSettingCollection: StringSetting;
  /** Query of Configuration Access Module */
  moduleSettingFloat: FloatSetting;
  /** Query of Configuration Access Module */
  moduleSettingInteger: IntegerSetting;
  /** Query of Configuration Access Module */
  moduleSettingString: StringSetting;
  /** Query of Configuration Access Module */
  moduleSettings: Array<SettingType>;
  /** Query of Configuration Access Module */
  modules: Array<ModuleDataTypeInterface>;
  product: Product;
  products: Array<Product>;
  promotion: Promotion;
  promotions: Array<Promotion>;
  /** Returns information for any basket marked as public. */
  publicBasket: PublicBasket;
  /** retrieve a new JWT for authentication by refresh token data */
  refresh: Scalars['String']['output'];
  review: Review;
  /** Query of Configuration Access Module */
  shopSettingAssocCollection: StringSetting;
  /** Query of Configuration Access Module */
  shopSettingBoolean: BooleanSetting;
  /** Query of Configuration Access Module */
  shopSettingCollection: StringSetting;
  /** Query of Configuration Access Module */
  shopSettingFloat: FloatSetting;
  /** Query of Configuration Access Module */
  shopSettingInteger: IntegerSetting;
  /** Query of Configuration Access Module */
  shopSettingSelect: StringSetting;
  /** Query of Configuration Access Module */
  shopSettingString: StringSetting;
  /** Query of Configuration Access Module */
  shopSettings: Array<SettingType>;
  /** Query of Configuration Access Module */
  themeSettingAssocCollection: StringSetting;
  /** Query of Configuration Access Module */
  themeSettingBoolean: BooleanSetting;
  /** Query of Configuration Access Module */
  themeSettingCollection: StringSetting;
  /** Query of Configuration Access Module */
  themeSettingFloat: FloatSetting;
  /** Query of Configuration Access Module */
  themeSettingInteger: IntegerSetting;
  /** Query of Configuration Access Module */
  themeSettingSelect: StringSetting;
  /** Query of Configuration Access Module */
  themeSettingString: StringSetting;
  /** Query of Configuration Access Module */
  themeSettings: Array<SettingType>;
  /** Query of Configuration Access Module */
  themesList: Array<ThemeDataTypeInterface>;
  /**
   * Query of Base Module.
   * Retrieve a JWT for authentication of further requests
   */
  token: Scalars['String']['output'];
  /**
   * Query of Base Module.
   * Query a customer's active JWT.
   * User with right 'VIEW_ANY_TOKEN' can query any customer's tokens.
   */
  tokens: Array<Token>;
  translation: Translation;
  translations: Array<Translation>;
  variantSelections?: Maybe<VariantSelections>;
  vendor: Vendor;
  vendors: Array<Vendor>;
  wishedPrice: WishedPrice;
  wishedPrices: Array<WishedPrice>;
};


export type QueryActionArgs = {
  actionId: Scalars['ID']['input'];
};


export type QueryActionsArgs = {
  filter?: InputMaybe<ActionFilterList>;
};


export type QueryAttributeArgs = {
  attributeId: Scalars['ID']['input'];
};


export type QueryAttributesArgs = {
  filter?: InputMaybe<AttributeFilterList>;
};


export type QueryBannerArgs = {
  bannerId: Scalars['ID']['input'];
};


export type QueryBasketArgs = {
  basketId: Scalars['ID']['input'];
};


export type QueryBasketsArgs = {
  owner: Scalars['String']['input'];
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<CategoryFilterList>;
  sort?: InputMaybe<CategorySorting>;
};


export type QueryCategoryArgs = {
  categoryId: Scalars['ID']['input'];
};


export type QueryContentArgs = {
  contentId: Scalars['ID']['input'];
};


export type QueryContentsArgs = {
  filter?: InputMaybe<ContentFilterList>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterList>;
  sort?: InputMaybe<CountrySorting>;
};


export type QueryCountryArgs = {
  countryId: Scalars['ID']['input'];
};


export type QueryCurrencyArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLinkArgs = {
  linkId: Scalars['ID']['input'];
};


export type QueryLinksArgs = {
  filter?: InputMaybe<LinkFilterList>;
};


export type QueryLoginArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryManufacturerArgs = {
  manufacturerId: Scalars['ID']['input'];
};


export type QueryManufacturersArgs = {
  filter?: InputMaybe<ManufacturerFilterList>;
  sort?: InputMaybe<ManufacturerSorting>;
};


export type QueryModuleSettingBooleanArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryModuleSettingCollectionArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryModuleSettingFloatArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryModuleSettingIntegerArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryModuleSettingStringArgs = {
  moduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryModuleSettingsArgs = {
  moduleId: Scalars['String']['input'];
};


export type QueryModulesArgs = {
  filters?: InputMaybe<ComponentFilters>;
};


export type QueryProductArgs = {
  productId: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  filter?: InputMaybe<ProductFilterList>;
  pagination?: InputMaybe<PaginationFilterInput>;
  sort?: InputMaybe<ProductSorting>;
};


export type QueryPromotionArgs = {
  promotionId: Scalars['ID']['input'];
};


export type QueryPublicBasketArgs = {
  basketId: Scalars['ID']['input'];
};


export type QueryRefreshArgs = {
  fingerprintHash: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};


export type QueryReviewArgs = {
  reviewId: Scalars['ID']['input'];
};


export type QueryShopSettingAssocCollectionArgs = {
  name: Scalars['String']['input'];
};


export type QueryShopSettingBooleanArgs = {
  name: Scalars['String']['input'];
};


export type QueryShopSettingCollectionArgs = {
  name: Scalars['String']['input'];
};


export type QueryShopSettingFloatArgs = {
  name: Scalars['String']['input'];
};


export type QueryShopSettingIntegerArgs = {
  name: Scalars['String']['input'];
};


export type QueryShopSettingSelectArgs = {
  name: Scalars['String']['input'];
};


export type QueryShopSettingStringArgs = {
  name: Scalars['String']['input'];
};


export type QueryThemeSettingAssocCollectionArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type QueryThemeSettingBooleanArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type QueryThemeSettingCollectionArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type QueryThemeSettingFloatArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type QueryThemeSettingIntegerArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type QueryThemeSettingSelectArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type QueryThemeSettingStringArgs = {
  name: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type QueryThemeSettingsArgs = {
  themeId: Scalars['String']['input'];
};


export type QueryThemesListArgs = {
  filters?: InputMaybe<ComponentFilters>;
};


export type QueryTokenArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTokensArgs = {
  filter?: InputMaybe<TokenFilterListInput>;
  pagination?: InputMaybe<PaginationFilterInput>;
  sort?: InputMaybe<TokenSortingInput>;
};


export type QueryTranslationArgs = {
  key: Scalars['String']['input'];
};


export type QueryVariantSelectionsArgs = {
  productId: Scalars['String']['input'];
  varSelIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryVendorArgs = {
  vendorId: Scalars['ID']['input'];
};


export type QueryVendorsArgs = {
  filter?: InputMaybe<VendorFilterList>;
  sort?: InputMaybe<VendorSorting>;
};


export type QueryWishedPriceArgs = {
  wishedPriceId: Scalars['ID']['input'];
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId: Scalars['ID']['output'];
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  shopId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
};

export type Review = {
  __typename?: 'Review';
  active: Scalars['Boolean']['output'];
  createAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  language: Language;
  product?: Maybe<Product>;
  rating: Scalars['Int']['output'];
  reviewer?: Maybe<Reviewer>;
  text: Scalars['String']['output'];
};

export type Reviewer = {
  __typename?: 'Reviewer';
  firstName: Scalars['String']['output'];
};

export type Selection = {
  __typename?: 'Selection';
  active: Scalars['Boolean']['output'];
  disabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type SelectionList = {
  __typename?: 'SelectionList';
  fields: Array<Selection>;
  title: Scalars['String']['output'];
};

export type Seo = {
  __typename?: 'Seo';
  description: Scalars['String']['output'];
  keywords: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type SettingType = {
  __typename?: 'SettingType';
  /** Field of Configuration Access module's SettingType-Type */
  name: Scalars['String']['output'];
  /**
   * Field of Configuration Access module's SettingType-Type.
   * Indicates if the type is supported by our queries and mutations.
   */
  supported: Scalars['Boolean']['output'];
  /** Field of Configuration Access module's StringSetting-Type */
  type: Scalars['String']['output'];
};

export type State = {
  __typename?: 'State';
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isoAlpha2: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type StateSorting = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
};

export type StringSetting = {
  __typename?: 'StringSetting';
  /** Field of Configuration Access module's StringSetting-Type */
  name: Scalars['String']['output'];
  /** Field of Configuration Access module's StringSetting-Type */
  value: Scalars['String']['output'];
};

export type Subscriber = {
  __typename?: 'Subscriber';
  userName: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** A placeholder query used by thecodingmachine/graphqlite when there are no declared subscriptions. */
  dummySubscription?: Maybe<Scalars['String']['output']>;
};

export type ThemeDataType = AbstractComponentDataTypeInterface & ComponentDataTypeInterface & ThemeDataTypeInterface & {
  __typename?: 'ThemeDataType';
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  parentTheme?: Maybe<Scalars['String']['output']>;
  parentVersions?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type ThemeDataTypeImpl = ThemeDataTypeInterface & {
  __typename?: 'ThemeDataTypeImpl';
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  parentTheme?: Maybe<Scalars['String']['output']>;
  parentVersions?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type ThemeDataTypeInterface = {
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  parentTheme?: Maybe<Scalars['String']['output']>;
  parentVersions?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type Token = {
  __typename?: 'Token';
  /** Field of Base module's Token-Type. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Field of Base module's Token-Type. */
  customerId: Scalars['ID']['output'];
  /** Field of Base module's Token-Type. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Field of Base module's Token-Type. */
  id: Scalars['ID']['output'];
  /** Field of Base module's Token-Type. */
  shopId: Scalars['ID']['output'];
  /** Field of Base module's Token-Type */
  token: Scalars['String']['output'];
  /** Field of Base module's Token-Type. */
  userAgent: Scalars['String']['output'];
};

export type TokenFilterListInput = {
  customerId?: InputMaybe<IdFilterInput>;
  expiresAt?: InputMaybe<DateFilterInput>;
  shopId?: InputMaybe<IdFilterInput>;
};

export type TokenSortingInput = {
  expiresAt: Scalars['String']['input'];
};

export type Translation = {
  __typename?: 'Translation';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  /** Field of Base module's User-Type. */
  email: Scalars['String']['output'];
  /** Field of Base module's User-Type. */
  id: Scalars['ID']['output'];
};

export type VariantSelectionList = {
  __typename?: 'VariantSelectionList';
  activeSelection?: Maybe<Selection>;
  fields: Array<Selection>;
  label: Scalars['String']['output'];
};

export type VariantSelections = {
  __typename?: 'VariantSelections';
  activeVariant?: Maybe<Product>;
  selections: Array<VariantSelectionList>;
};

export type Vendor = {
  __typename?: 'Vendor';
  active: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  products: Array<Product>;
  seo: Seo;
  shortdesc: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
};


export type VendorProductsArgs = {
  pagination?: InputMaybe<PaginationFilterInput>;
  sort?: InputMaybe<ProductSorting>;
};

export type VendorFilterList = {
  title?: InputMaybe<StringFilterInput>;
};

export type VendorSorting = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Voucher = {
  __typename?: 'Voucher';
  discount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  number: Scalars['String']['output'];
  redeemedAt?: Maybe<Scalars['DateTime']['output']>;
  reserved?: Maybe<Scalars['DateTime']['output']>;
  series: VoucherSeries;
  voucher: Scalars['String']['output'];
};

export type VoucherSeries = {
  __typename?: 'VoucherSeries';
  description: Scalars['String']['output'];
  discount: Scalars['Float']['output'];
  discountType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validTo?: Maybe<Scalars['DateTime']['output']>;
};

export type WishedPrice = {
  __typename?: 'WishedPrice';
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  currency: Currency;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inquirer?: Maybe<Inquirer>;
  /**
   * This field gives us information about the last sent notification email.
   * When it is null it states that no notification email was sent.
   */
  notificationDate?: Maybe<Scalars['DateTime']['output']>;
  price: Price;
  product: Product;
};

export type BasketFragment = { __typename?: 'Basket', id: string, title: string, items: Array<{ __typename?: 'BasketItem', id: string, amount: number, product?: { __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, variants: Array<{ __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> }>, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> } | null }>, cost: { __typename?: 'BasketCost', voucher: number, discount: number, total: number, delivery: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, productNet: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, productGross: { __typename?: 'BasketProductBruttoSum', sum: number }, currency: { __typename?: 'Currency', name: string } } };

export type CategoryFragment = { __typename?: 'Category', id: string, title: string, longDescription: string, thumbnail?: string | null, seo: { __typename?: 'Seo', description: string, url?: string | null }, parent?: { __typename?: 'Category', id: string } | null, children: Array<{ __typename?: 'Category', id: string }> };

export type CurrencyFragment = { __typename?: 'Currency', name: string };

export type ManufacturerFragment = { __typename?: 'Manufacturer', id: string, title: string };

export type PriceFragment = { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } };

export type ProductBaseFragment = { __typename?: 'Product', sku?: string | null, ean: string, title: string, seo: { __typename?: 'Seo', description: string, url?: string | null } };

export type ProductAvailabilityFragment = { __typename?: 'Product', stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null } };

export type ProductOptionsFragment = { __typename?: 'Product', selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> };

export type ProductInfoFragment = { __typename?: 'Product', shortDescription: string, longDescription: string, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, seo: { __typename?: 'Seo', description: string, url?: string | null } };

export type ProductMediaFragment = { __typename?: 'Product', imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> } };

export type ProductPricesFragment = { __typename?: 'Product', varMinPrice: number, vat: number, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null };

export type ProductSeoFragment = { __typename?: 'Product', seo: { __typename?: 'Seo', description: string, url?: string | null } };

export type ProductDescriptionFragment = { __typename?: 'Product', shortDescription: string, longDescription: string };

export type ProductQuantityPricesFragment = { __typename?: 'Product', scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }> };

export type ProductLinkVariantsFragment = { __typename?: 'Product', variants: Array<{ __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> }> };

export type ProductFragment = { __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }>, variants: Array<{ __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> }> };

export type SeoFragment = { __typename?: 'Seo', description: string, url?: string | null };

export type VendorFragment = { __typename?: 'Vendor', id: string, title: string };

export type BasketCreateMutationMutationVariables = Exact<{
  basket: BasketInput;
}>;


export type BasketCreateMutationMutation = { __typename?: 'Mutation', basketCreate: { __typename?: 'Basket', id: string, title: string, items: Array<{ __typename?: 'BasketItem', id: string, amount: number, product?: { __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, variants: Array<{ __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> }>, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> } | null }>, cost: { __typename?: 'BasketCost', voucher: number, discount: number, total: number, delivery: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, productNet: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, productGross: { __typename?: 'BasketProductBruttoSum', sum: number }, currency: { __typename?: 'Currency', name: string } } } };

export type BasketAddItemMutationMutationVariables = Exact<{
  basketId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
}>;


export type BasketAddItemMutationMutation = { __typename?: 'Mutation', basketAddItem: { __typename?: 'Basket', id: string, title: string, items: Array<{ __typename?: 'BasketItem', id: string, amount: number, product?: { __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, variants: Array<{ __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> }>, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> } | null }>, cost: { __typename?: 'BasketCost', voucher: number, discount: number, total: number, delivery: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, productNet: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, productGross: { __typename?: 'BasketProductBruttoSum', sum: number }, currency: { __typename?: 'Currency', name: string } } } };

export type BasketQueryQueryVariables = Exact<{
  basketId: Scalars['ID']['input'];
}>;


export type BasketQueryQuery = { __typename?: 'Query', basket: { __typename?: 'Basket', id: string, title: string, items: Array<{ __typename?: 'BasketItem', id: string, amount: number, product?: { __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, variants: Array<{ __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> }>, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> } | null }>, cost: { __typename?: 'BasketCost', voucher: number, discount: number, total: number, delivery: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, productNet: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, productGross: { __typename?: 'BasketProductBruttoSum', sum: number }, currency: { __typename?: 'Currency', name: string } } } };

export type CategoriesQueryQueryVariables = Exact<{
  parentIdFilter?: InputMaybe<StringFilterInput>;
}>;


export type CategoriesQueryQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, title: string, longDescription: string, thumbnail?: string | null, seo: { __typename?: 'Seo', description: string, url?: string | null }, parent?: { __typename?: 'Category', id: string } | null, children: Array<{ __typename?: 'Category', id: string }> }> };

export type ManufacturerQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ManufacturerQueryQuery = { __typename?: 'Query', manufacturers: Array<{ __typename?: 'Manufacturer', id: string, title: string }> };

export type ProductsQueryQueryVariables = Exact<{
  categoryFilter?: InputMaybe<CategoryIdFilterInput>;
  titleFilter?: InputMaybe<StringFilterInput>;
  vendorFilter?: InputMaybe<IdFilterInput>;
  manufacturerFilter?: InputMaybe<IdFilterInput>;
  pagination?: InputMaybe<PaginationFilterInput>;
  sort?: InputMaybe<ProductSorting>;
  includeProductBase?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductInfo?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductMedia?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductPrices?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductSeo?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductDescription?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductAvailability?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductQuantityPrices?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductOptions?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariant?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantBase?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantInfo?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantMedia?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantPrices?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantSeo?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantDescription?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantAvailability?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantQuantityPrices?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantOptions?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ProductsQueryQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }>, variants: Array<{ __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> }> }> };

export type ProductQueryQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
  includeProductBase?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductInfo?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductMedia?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductPrices?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductSeo?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductDescription?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductAvailability?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductQuantityPrices?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductOptions?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariant?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantBase?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantInfo?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantMedia?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantPrices?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantSeo?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantDescription?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantAvailability?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantQuantityPrices?: InputMaybe<Scalars['Boolean']['input']>;
  includeProductVariantOptions?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ProductQueryQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }>, variants: Array<{ __typename?: 'Product', id: string, sku?: string | null, ean: string, title: string, shortDescription: string, longDescription: string, varMinPrice: number, vat: number, seo: { __typename?: 'Seo', description: string, url?: string | null }, imageGallery: { __typename?: 'ProductImageGallery', images: Array<{ __typename?: 'ProductImage', image: string, icon: string, zoom: string }> }, manufacturer?: { __typename?: 'Manufacturer', id: string, title: string } | null, price: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } }, listPrice?: { __typename?: 'Price', price: number, vat: number, vatValue: number, currency: { __typename?: 'Currency', name: string } } | null, stock: { __typename?: 'ProductStock', stock: number, restockDate?: any | null }, scalePrices: Array<{ __typename?: 'ProductScalePrice', absoluteScalePrice: boolean, absolutePrice?: number | null, discount?: number | null, amountFrom: number, amountTo: number }>, selectionLists: Array<{ __typename?: 'SelectionList', title: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> }> } };

export type TokenQueryQueryVariables = Exact<{
  user: Scalars['String']['input'];
  pass: Scalars['String']['input'];
}>;


export type TokenQueryQuery = { __typename?: 'Query', token: string };

export type VariantSelectionsQueryQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  varSelIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type VariantSelectionsQueryQuery = { __typename?: 'Query', variantSelections?: { __typename?: 'VariantSelections', selections: Array<{ __typename?: 'VariantSelectionList', label: string, fields: Array<{ __typename?: 'Selection', name: string, value: string, active: boolean, disabled: boolean }> }> } | null };

export type VendorQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type VendorQueryQuery = { __typename?: 'Query', vendors: Array<{ __typename?: 'Vendor', id: string, title: string }> };
