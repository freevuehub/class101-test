import axios, { AxiosResponse } from 'axios'
import endpoint from './endpoint.config'
import { IProductsAxiosResponse } from '../types'

export const getProductList = async (): Promise<IProductsAxiosResponse> => {
  try {
    const { data }: AxiosResponse<IProductsAxiosResponse> = await axios.get(endpoint.products.request.list())

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
