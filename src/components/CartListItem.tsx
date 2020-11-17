import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Button, Checkbox } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { deleteProduct } from '../store/cart'
import { priceString } from '../utils'
import { IProduct, ICartListItem } from '../types'

interface IProps {
  item: ICartListItem
  product: IProduct | undefined
}

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
    .check-remote {
      margin-left: 20px;
    }
  }
`

const CartListItem: React.FC<IProps> = (props) => {
  const dispatch = useDispatch()
  const onCheckboxChange = () => {
    console.log(props.item.id)
  }

  if (!props.product) {
    dispatch(deleteProduct(props.item.id))
  }

  const price = props.product?.price || 0

  return (
    <CardStyled cover={<img src={props.product?.coverImage} alt={props.product?.title} />}>
      <Card.Meta title={props.product?.title} description={`${priceString(price * props.item.count)} 원`} />
      <div className="count-remote">
        <Button icon={<MinusOutlined />} size="large" />
        <h1>{props.item.count}</h1>
        <Button type="primary" icon={<PlusOutlined />} size="large" />
      </div>
      <div className="check-remote">
        <Checkbox onChange={onCheckboxChange} checked={props.item.checked} />
      </div>
    </CardStyled>
  )
}

export default CartListItem
