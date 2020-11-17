import { IStoreCartState, ICartListItem } from '../types'

const ADD_PRODUCT = '@/cart/ADD/PRODUCT'
const DELETE_PRODUCT = '@/cart/DELETE/PRODUCT'

export const addProduct = (payload: string) => ({ type: ADD_PRODUCT, payload })
export const deleteProduct = (payload: string) => ({ type: DELETE_PRODUCT, payload })

const initailizeState = {
  // list: [],

  // TODO: 해당 데이터는 장바구니 상태를 확인하기 위한 데이터이다. 최종 본에는 제거 필수.
  list: [{ id: 'ZXV8mCcvbpXKm5J5snUq', count: 1 }],
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
          },
        ],
      }
    case DELETE_PRODUCT:
      const filterList = (item: ICartListItem) => item.id !== actions.payload

      return {
        ...state,
        list: state.list.filter(filterList),
      }
    default:
      return Object.assign({}, state)
  }
}
