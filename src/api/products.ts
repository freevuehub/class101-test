import axios, { AxiosResponse } from 'axios'
import endpoint from './endpoint.config'
import { IProductListItem } from '../types'

export const getProductList = async () => {
  try {
    const { data }: AxiosResponse<IProductListItem> = await axios.get(endpoint.products.request.list())

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
