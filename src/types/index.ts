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
