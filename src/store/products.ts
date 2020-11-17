import { IProduct, IStoreProductsState } from '../types'

const LIST_UPDATE = '@/products/LIST/UPDATE'

export const listUpdate = (payload: IStoreProductsState) => ({ type: LIST_UPDATE, payload })

const initailizeState = {
  list: [],
  count: 0,
}

export default (state: IStoreProductsState = initailizeState, actions: any) => {
  switch (actions.type) {
    case LIST_UPDATE:
      return {
        ...state,
        count: actions.payload.count,
        list: actions.payload.list,
      }
    default:
      return Object.assign({}, state)
  }
}
