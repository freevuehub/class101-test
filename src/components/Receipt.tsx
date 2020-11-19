import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button, Divider, Alert } from 'antd'
import { IStoreState, ICartListItem, IProduct } from '../types'
import { PriceRow, CouponPrice } from './'
interface ICartProduct extends ICartListItem {
  coverImage?: string
  price?: number
  score?: number
  title?: string
  availableCoupon?: boolean
}

const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: center;
  button {
    &:first-child {
      margin-right: 10px;
    }
  }
`

const cartProductsMap = (item: ICartProduct) => {
  const price = item?.price || 0

  return <PriceRow key={item.id} title={item?.title} price={price * item.count} count={item.count} />
}
const cartProductFilter = (item: ICartProduct) => {
  console.log(item)
  return item.checked
}
const cartProductsReduce = (prev: number, cur: ICartProduct) => {
  return prev + (cur?.price || 0) * cur.count
}
const Receipt: React.FC = () => {
  const cartList = useSelector((state: IStoreState) => state.cart.list)
  const productList = useSelector((state: IStoreState) => state.products.list)

  const cartListMapProduct = (item: ICartListItem) => {
    const product: IProduct | undefined = productList.get(item.id)

    return {
      ...product,
      ...item,
    }
  }

  const cartProducts = cartList.map(cartListMapProduct).filter(cartProductFilter)
  const productTotalPrice = cartProducts.reduce(cartProductsReduce, 0)

  return (
    <>
      {cartProducts.length ? (
        <>
          {cartProducts.map(cartProductsMap)}
          <Divider />
          <CouponPrice totalPrice={productTotalPrice} />
          <Divider />
          <PriceRow title="최총 가격" price={0} />
        </>
      ) : (
        <Alert message="선택된 상품이 없습니다." type="info" />
      )}
      <Divider />
      <ButtonGroupStyled>
        <Button size="large">돌아가기</Button>
        <Button size="large" type="primary">
          구입하기
        </Button>
      </ButtonGroupStyled>
    </>
  )
}

export default Receipt
