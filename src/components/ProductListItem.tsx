import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Card } from 'antd'
import { IProduct, ICartListItem, IStoreState } from '../types'
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons'
import { addProduct, deleteProduct } from '../store/cart'

interface IProps {
  item: IProduct
}

const CardStyled = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
  .ant-card-cover {
    height: 150px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
`
const CartIconStyled = styled(ShoppingCartOutlined)`
  &.on {
    color: #1890ff !important;
  }
`

const ProductListItem: React.FC<IProps> = (props) => {
  const dispatch = useDispatch()
  const cartList: ICartListItem[] = useSelector((state: IStoreState) => state.cart.list)
  const isCart = cartList.some((item: ICartListItem) => item.id === props.item.id)

  const onCartClick = () => {
    if (isCart) {
      dispatch(deleteProduct(props.item.id))
    } else {
      if (cartList.length >= 3) {
        return alert('장바구니에는 최대 3개의 상품만 담을 수 있습니다.')
      }

      dispatch(addProduct(props.item.id))
    }
  }

  const cardCover = <img src={props.item.coverImage} alt={props.item.title} />
  const cardActionList = [
    <HeartOutlined key="heart" />,
    <CartIconStyled onClick={onCartClick} key="cart" className={`${isCart ? 'on' : ''}`} />,
  ]
  const priceString = `${props.item.price}`.replace(/(\d)(?=(?:\d{3})+(?!\d))/, '$1,')

  return (
    <CardStyled hoverable cover={cardCover} actions={cardActionList}>
      <Card.Meta title={props.item.title} description={`${priceString} 원`} />
    </CardStyled>
  )
}

export default ProductListItem
