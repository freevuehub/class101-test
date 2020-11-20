import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button, Divider, Alert } from 'antd'
import { IStoreState, ICartListItem, IProduct } from '../types'
import { PriceRow, CouponPrice } from './'
import { priceString } from '../utils'
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
  return item.checked
}
const cartProductsReduce = (prev: number, cur: ICartProduct) => {
  return prev + (cur?.price || 0) * cur.count
}
const possibleDiscountReduce = (prev: number, cur: ICartProduct) => {
  return prev + (cur.availableCoupon === false ? 0 : (cur?.price || 0) * cur.count)
}
const Receipt: React.FC = () => {
  const history = useHistory()
  const cartList = useSelector((state: IStoreState) => state.cart.list)
  const productList = useSelector((state: IStoreState) => state.products.list)
  const [discount, setDiscount] = useState(0)

  const cartListMapProduct = (item: ICartListItem) => {
    const product: IProduct | undefined = productList.get(item.id)

    return {
      ...product,
      ...item,
    }
  }

  const onDiscountChange = (price: number) => {
    setDiscount(Math.floor(price))
  }
  const onBackClick = () => {
    history.goBack()
  }
  const onBuyClick = () => {
    console.log(`
      상품 금액: ${priceString(productTotalPrice)} 원
      할인 금액: ${priceString(discount)} 원
      총 결제 금액: ${priceString(productTotalPrice - discount)} 원
    `)

    alert(`console 창을 확인해주세요.`)
  }

  const cartProducts = cartList.map(cartListMapProduct).filter(cartProductFilter)
  const productTotalPrice = cartProducts.reduce(cartProductsReduce, 0)
  const possibleDiscountPrice = cartProducts.reduce(possibleDiscountReduce, 0)

  return (
    <>
      {cartProducts.length ? (
        <>
          {cartProducts.map(cartProductsMap)}
          <Divider />
          <PriceRow title="총 상품 가격" price={productTotalPrice} />
          <CouponPrice totalPrice={possibleDiscountPrice} onChange={onDiscountChange} />
          <Divider />
          <PriceRow title="최총 가격" price={productTotalPrice - discount} />
        </>
      ) : (
        <Alert message="선택된 상품이 없습니다." type="info" />
      )}
      <Divider />
      <ButtonGroupStyled>
        <Button size="large" onClick={onBackClick}>
          돌아가기
        </Button>
        <Button size="large" type="primary" onClick={onBuyClick}>
          구입하기
        </Button>
      </ButtonGroupStyled>
    </>
  )
}

export default Receipt
