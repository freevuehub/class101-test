import React from 'react'
import { useSelector } from 'react-redux'
import { Divider, Alert } from 'antd'
import { IStoreState, ICartListItem } from '../types'
import { CartListItem, Receipt } from '../components'

const Carts: React.FC = () => {
  const cartList = useSelector((state: IStoreState) => state.cart.list)
  const productList = useSelector((state: IStoreState) => state.products.list)

  const cartListMap = (item: ICartListItem) => {
    const product = productList.get(item.id)

    return <CartListItem key={item.id} item={item} product={product} />
  }

  if (!cartList.length) {
    return <Alert message="장바구니가 비어있습니다." type="info" />
  }

  return (
    <>
      {cartList.map(cartListMap)}
      <Divider />
      <Receipt />
    </>
  )
}

export default Carts
