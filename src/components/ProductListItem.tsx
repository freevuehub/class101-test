import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { IProduct } from '../types'
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons'

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

const ProductListItem: React.FC<IProps> = (props) => {
  const onCartClick = () => {
    console.log(props.item.id)
  }

  const cardCover = <img src={props.item.coverImage} alt={props.item.title} />
  const cardActionList = [
    <HeartOutlined key="heart" />,
    <ShoppingCartOutlined onClick={onCartClick} key="cart" twoToneColor="#eb2f96" />,
  ]
  const priceString = `${props.item.price}`.replace(/(\d)(?=(?:\d{3})+(?!\d))/, '$1,')

  return (
    <CardStyled hoverable cover={cardCover} actions={cardActionList}>
      <Card.Meta title={props.item.title} description={`${priceString} 원`} />
    </CardStyled>
  )
}

export default ProductListItem
