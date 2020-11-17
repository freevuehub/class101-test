import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { getProductList } from '../api'
import { ProductListItem } from '../components'
import { IProduct } from '../types'

const ColStyled = styled(Col)`
  padding: 15px;
`

const listMap = (item: IProduct) => (
  <ColStyled key={item.id} span={8} className="gutter-row">
    <ProductListItem item={item} />
  </ColStyled>
)
const Products: React.FC = () => {
  const [list, setList] = useState<IProduct[]>([])

  const getList = async () => {
    const { products } = await getProductList()

    products.sort((prev: IProduct, cur: IProduct) => cur.score - prev.score)

    setList(products)
  }

  useEffect(() => {
    getList()
  }, [])

  return <Row>{list.map(listMap)}</Row>
}

export default Products
