export interface IProduct {
  id: string
  coverImage: string
  price: number
  score: number
  title: string
  availableCoupon?: boolean
}

export type TypeMapProduct = Map<string, IProduct>

export interface IProductsAxiosResponse {
  products: IProduct[]
}

export interface ICouponsAxiosResponse {
  coupons: ICouponListItem[]
}

export interface IStoreProductsState {
  list: TypeMapProduct
  count: number
}

export interface ICartListItem {
  id: string
  count: number
  checked: boolean
}

export interface ICouponListItem {
  title: string
  type: string
  discountRate?: number
  discountAmount?: number
}

export interface IStoreCartState {
  list: ICartListItem[]
}

export interface IStoreState {
  products: IStoreProductsState
  cart: IStoreCartState
}

export interface IAction<T> {
  type: string
  payload: T
}
