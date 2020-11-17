import React, { useEffect, useState } from 'react'
import { Layout, Card, Row, Col } from 'antd'
import { getProductList } from '../api'
import { IProduct } from '../types'

const listMap = (item: IProduct) => (
  <Col key={item.id} span={6}>
    <Card hoverable cover={<img alt={item.title} src={item.coverImage} />}>
      <Card.Meta title={item.title} description={item.score} />
    </Card>
  </Col>
)
const Products: React.FC = () => {
  const [list, setList] = useState<IProduct[]>([])

  const getList = async () => {
    const { products } = await getProductList()

    setList(products)
  }

  useEffect(() => {
    getList()
  }, [])

  return <Row>{list.map(listMap)}</Row>
}

export default Products
