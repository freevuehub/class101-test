import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import { Row, Col, Pagination } from 'antd'
import { getProductList } from '../api'
import { ProductListItem } from '../components'
import { IProduct } from '../types'
import queryString from 'query-string'

const ColStyled = styled(Col)`
  padding: 15px;
`
const PageStyled = styled(Pagination)`
  text-align: center;
  margin-top: 20px;
`

const listMap = (item: IProduct) => (
  <ColStyled key={item.id} span={8} className="gutter-row">
    <ProductListItem item={item} />
  </ColStyled>
)
const Products: React.FC = () => {
  const history = useHistory()
  const query = queryString.parse(useLocation().search)
  const limit = 5
  const page = Number(query.page || 1)
  const [list, setList] = useState<IProduct[]>([])
  const [count, setCount] = useState<number>(0)
  const onPageClick = (currentPage: number) => {
    history.push(`/products?page=${currentPage}`)
  }

  const getList = async () => {
    const { products } = await getProductList()

    products.sort((prev: IProduct, cur: IProduct) => cur.score - prev.score)

    const filterProducts = products.filter((_, index: number) => {
      return (page - 1) * limit <= index && index < page * limit
    })

    setCount(products.length)
    setList(filterProducts)
  }

  useEffect(() => {
    getList()
  }, [])
  useEffect(() => {
    console.log('page')
  }, [page])

  return (
    <>
      <Row>{list.map(listMap)}</Row>
      <PageStyled onChange={onPageClick} defaultCurrent={page} total={count} />
    </>
  )
}

export default Products
