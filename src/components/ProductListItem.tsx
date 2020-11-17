import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { IProduct } from '../types'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

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
  const priceString = `${props.item.price}`.replace(/(\d)(?=(?:\d{3})+(?!\d))/, '$1,')

  return (
    <CardStyled
      hoverable
      cover={<img src={props.item.coverImage} alt={props.item.title} />}
      actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
    >
      <Card.Meta title={props.item.title} description={`${priceString} 원`} />
    </CardStyled>
  )
}

export default ProductListItem
