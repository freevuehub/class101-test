import { IStoreCartState, ICartListItem } from '../types'

interface ICountPayload {
  id: string
  count: number
}

interface ICheckPayload {
  id: string
  checked: boolean
}

const ADD_PRODUCT = '@/cart/ADD/PRODUCT'
const DELETE_PRODUCT = '@/cart/DELETE/PRODUCT'
const PLUS_COUNT = '@/cart/PLUS/COUNT'
const MINUS_COUNT = '@/cart/MINUS/COUNT'
const CHECK_PRODUCT = '@/cart/CHECK/PRODUCT'

export const addProduct = (payload: string) => ({ type: ADD_PRODUCT, payload })
export const deleteProduct = (payload: string) => ({ type: DELETE_PRODUCT, payload })
export const plusCount = (payload: ICountPayload) => ({ type: PLUS_COUNT, payload })
export const minusCount = (payload: ICountPayload) => ({ type: MINUS_COUNT, payload })
export const checkCount = (payload: ICheckPayload) => ({ type: CHECK_PRODUCT, payload })

const initailizeState = {
  // list: [],

  // TODO: 해당 데이터는 장바구니 상태를 확인하기 위한 데이터이다. 최종 본에는 제거 필수.
  list: [{ id: 'ZXV8mCcvbpXKm5J5snUq', count: 1, checked: true }],
}

export default (state: IStoreCartState = initailizeState, actions: any) => {
  switch (actions.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: actions.payload,
            count: 1,
            checked: true,
          },
        ],
      }
    case DELETE_PRODUCT:
      const filterList = (item: ICartListItem) => item.id !== actions.payload

      return {
        ...state,
        list: state.list.filter(filterList),
      }
    case PLUS_COUNT:
      return {
        ...state,
      }
    case MINUS_COUNT:
      return {
        ...state,
      }
    case CHECK_PRODUCT:
      return {
        ...state,
      }
    default:
      return Object.assign({}, state)
  }
}
