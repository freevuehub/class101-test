import axios, { AxiosResponse } from 'axios'
import endpoint from './endpoint.config'

interface IProduct {
  coverImage: string
  id: string
  price: number
  score: number
  title: string
}

interface IProductListItem {
  products: IProduct[]
}

export const getProductList = async () => {
  try {
    const { data }: AxiosResponse<IProductListItem> = await axios.get(endpoint.products.request.list())

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
