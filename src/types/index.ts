export interface IProduct {
  id: string
  coverImage: string
  price: number
  score: number
  title: string
}

export interface IProductListItem {
  products: IProduct[]
}

export interface IStoreProductsState {
  list: IProduct[]
  count: number
}

export interface ICartListItem {
  id: string
  count: number
}

export interface IStoreCartState {
  list: ICartListItem[]
}

export interface IStoreState {
  products: IStoreProductsState
  cart: IStoreCartState
}
