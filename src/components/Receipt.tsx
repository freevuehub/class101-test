import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Divider, Select } from 'antd'
import { IStoreState, ICartListItem } from '../types'
import { PriceRow } from './'

const cartProductsMap = (item: any) => {
  const price = item?.price || 0

  return <PriceRow key={item.id} title={item?.title} price={price * item.count} count={item.count} />
}
const cartProductsReduce = (prev: number, cur: any) => {
  return prev + cur.price * cur.count
}
const Receipt: React.FC = () => {
  const cartList = useSelector((state: IStoreState) => state.cart.list)
  const productList = useSelector((state: IStoreState) => state.products.list)

  const cartListMapProduct = (item: ICartListItem) => {
    const product = productList.get(item.id)

    return {
      ...product,
      ...item,
    }
  }

  const cartProducts = cartList.map(cartListMapProduct)
  const productTotalPrice = cartProducts.reduce(cartProductsReduce, 0)

  return (
    <div>
      {cartProducts.map(cartProductsMap)}
      <Divider />
      <PriceRow title="총 상품 가격" price={productTotalPrice} />
      <PriceRow price={productTotalPrice}>
        <Select labelInValue size="large" style={{ width: 120 }}>
          <Select.Option value="jack">Jack (100)</Select.Option>
          <Select.Option value="lucy">Lucy (101)</Select.Option>
        </Select>
      </PriceRow>
      <Divider />
      <PriceRow title="최총 가격" price={productTotalPrice} />
      <Divider />
      <Button size="large">돌아가기</Button>
      <Button size="large" type="primary">
        구입하기
      </Button>
    </div>
  )
}

export default Receipt
