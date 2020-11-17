import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from 'antd'
import { IStoreState, ICartListItem } from '../types'
import { CartListItem } from '../components'

const Carts: React.FC = () => {
  const cartList = useSelector((state: IStoreState) => state.cart.list)
  const productList = useSelector((state: IStoreState) => state.products.list)

  const cartListMap = (item: ICartListItem) => {
    const product = productList.get(item.id)

    return <CartListItem key={item.id} item={product} count={item.count} />
  }

  return (
    <>
      {cartList.map(cartListMap)}
      <Divider />
      <div>총합</div>
    </>
  )
}

export default Carts
