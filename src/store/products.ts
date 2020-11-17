import { IProduct } from '../types'

interface IListUpdatePayload {
  count: number
  list: IProduct[]
}

type IState = IListUpdatePayload

const LIST_UPDATE = '@/products/LIST/UPDATE'

export const listUpdate = (payload: IListUpdatePayload) => ({ type: LIST_UPDATE, payload })

const initailizeState = {
  list: [],
  count: 0,
}

export default (state: IState = initailizeState, actions: any) => {
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
