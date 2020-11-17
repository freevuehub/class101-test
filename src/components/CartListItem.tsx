import React from 'react'
import { Card, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { priceString } from '../utils'

interface IProps {
  item: any
  count: number
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
  }
`

const CartListItem: React.FC<IProps> = (props) => {
  return (
    <CardStyled cover={<img src={props.item.coverImage} alt={props.item.title} />}>
      <Card.Meta title={props.item.title} description={`${priceString(props.item.price || 0)} 원`} />
      <div className="count-remote">
        <Button icon={<MinusOutlined />} size="large" />
        <h1>{props.count}</h1>
        <Button type="primary" icon={<PlusOutlined />} size="large" />
      </div>
    </CardStyled>
  )
}

export default CartListItem
