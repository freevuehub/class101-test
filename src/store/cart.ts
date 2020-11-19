import { IStoreCartState, ICartListItem } from '../types'

const ADD_PRODUCT = '@/cart/ADD/PRODUCT'
const DELETE_PRODUCT = '@/cart/DELETE/PRODUCT'
const PLUS_COUNT = '@/cart/PLUS/COUNT'
const MINUS_COUNT = '@/cart/MINUS/COUNT'
const CHECK_PRODUCT = '@/cart/CHECK/PRODUCT'

export const addProduct = (payload: string) => ({ type: ADD_PRODUCT, payload })
export const deleteProduct = (payload: string) => ({ type: DELETE_PRODUCT, payload })
export const plusCount = (payload: string) => ({ type: PLUS_COUNT, payload })
export const minusCount = (payload: string) => ({ type: MINUS_COUNT, payload })
export const checkProduct = (payload: string) => ({ type: CHECK_PRODUCT, payload })

const initailizeState = {
  // list: [],

  // TODO: 해당 데이터는 장바구니 상태를 확인하기 위한 데이터이다. 최종 본에는 제거 필수.
  list: [{ id: 'tpP45lSwqf1X1yEEFqL4', count: 2, checked: true }],
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
      const plusListMap = (product: ICartListItem) => {
        return product.id === actions.payload ? { ...product, count: ++product.count } : product
      }

      return {
        ...state,
        list: state.list.map(plusListMap),
      }
    case MINUS_COUNT:
      const minusListMap = (product: ICartListItem) => {
        return product.id === actions.payload ? { ...product, count: --product.count } : product
      }

      return {
        ...state,
        list: state.list.map(minusListMap),
      }
    case CHECK_PRODUCT:
      const checkListMap = (product: ICartListItem) => {
        return product.id === actions.payload ? { ...product, checked: !product.checked } : product
      }

      return {
        ...state,
        list: state.list.map(checkListMap),
      }
    default:
      return Object.assign({}, state)
  }
}
