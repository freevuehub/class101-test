import axios, { AxiosResponse } from 'axios'
import endpoint from './endpoint.config'
import { IProductListItem } from '../types'

export const getCoupontList = async () => {
  try {
    const { data }: AxiosResponse<any> = await axios.get(endpoint.coupon.request.list())

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
