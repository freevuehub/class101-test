import { IStoreProductsState, IAction } from '../types'

type TypeProductsAction = IAction<IStoreProductsState>

const LIST_UPDATE = '@/products/LIST/UPDATE'

export const listUpdate = (payload: IStoreProductsState): TypeProductsAction => {
  return { type: LIST_UPDATE, payload }
}

const initailizeState = {
  list: new Map(),
  count: 0,
}

export default (state: IStoreProductsState = initailizeState, actions: TypeProductsAction): IStoreProductsState => {
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
