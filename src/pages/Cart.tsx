import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'antd'
import { IStoreState, ICartListItem } from '../types'

const Carts: React.FC = () => {
  const cartList = useSelector((state: IStoreState) => state.cart.list)
  const productList = useSelector((state: IStoreState) => state.products.list)

  console.log(cartList)

  return (
    <>
      {cartList.map((item: ICartListItem) => {
        const product = productList.get(item.id)

        return (
          <Card key={item.id} cover={<img src={product?.coverImage} alt={product?.title} />}>
            <Card.Meta title={product?.title} description="www.instagram.com" />
          </Card>
        )
      })}
    </>
  )
}

export default Carts
