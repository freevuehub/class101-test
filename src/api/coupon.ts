import axios, { AxiosResponse } from 'axios'
import endpoint from './endpoint.config'
import { ICouponsAxiosResponse } from '../types'

export const getCoupontList = async () => {
  try {
    const { data }: AxiosResponse<ICouponsAxiosResponse> = await axios.get(endpoint.coupon.request.list())

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
