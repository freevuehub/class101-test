import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'antd'
import styled from 'styled-components'
import { IStoreState, ICartListItem } from '../types'
import { priceString } from '../utils'

const CardStyled = styled(Card)`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
  .ant-card-cover {
    width: 200px;
    height: 100px;
  }
`
const Carts: React.FC = () => {
  const cartList = useSelector((state: IStoreState) => state.cart.list)
  const productList = useSelector((state: IStoreState) => state.products.list)

  const cartListMap = (item: ICartListItem) => {
    const product = productList.get(item.id)

    return (
      <CardStyled key={item.id} cover={<img src={product?.coverImage} alt={product?.title} />}>
        <Card.Meta title={product?.title} description={`${priceString(product?.price || 0)} 원`} />
      </CardStyled>
    )
  }

  return <>{cartList.map(cartListMap)}</>
}

export default Carts
