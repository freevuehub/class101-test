// import { IProduct, IStoreProductsState } from '../types'

const ADD_PRODUCT = '@/cart/ADD/PRODUCT'
const DELETE_PRODUCT = '@/cart/DELETE/PRODUCT'

export const addProduct = (payload: any) => ({ type: ADD_PRODUCT, payload })
export const deleteProduct = (payload: any) => ({ type: DELETE_PRODUCT, payload })

const initailizeState = {
  cartList: [],
}

export default (state: any = initailizeState, actions: any) => {
  switch (actions.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartList: [...state.cartList, actions.payload.product],
      }
    case DELETE_PRODUCT:
      return {
        ...state,
      }
    default:
      return Object.assign({}, state)
  }
}
