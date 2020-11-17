import { IProduct, IStoreCartState } from '../types'

const ADD_PRODUCT = '@/cart/ADD/PRODUCT'
const DELETE_PRODUCT = '@/cart/DELETE/PRODUCT'

export const addProduct = (payload: IProduct) => ({ type: ADD_PRODUCT, payload })
export const deleteProduct = (payload: string) => ({ type: DELETE_PRODUCT, payload })

const initailizeState = {
  list: [],
}

export default (state: IStoreCartState = initailizeState, actions: any) => {
  switch (actions.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        list: [...state.list, actions.payload.product],
      }
    case DELETE_PRODUCT:
      return {
        ...state,
      }
    default:
      return Object.assign({}, state)
  }
}
