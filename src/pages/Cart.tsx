import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Divider, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
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
  .ant-card-body {
    display: flex;
    align-items: center;
    flex: 1;
    .count-remote {
      display: flex;
      align-items: center;
      margin-left: auto;
      h1 {
        min-width: 40px;
        line-height: 40px;
        padding: 0 5px;
        text-align: center;
        margin: 0;
      }
    }
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
        <div className="count-remote">
          <Button icon={<MinusOutlined />} size="large" />
          <h1>{item.count}</h1>
          <Button type="primary" icon={<PlusOutlined />} size="large" />
        </div>
      </CardStyled>
    )
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
