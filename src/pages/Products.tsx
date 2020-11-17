import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import queryString from 'query-string'
import { Row, Col, Pagination } from 'antd'
import { listUpdate } from '../store/products'
import { getProductList } from '../api'
import { ProductListItem } from '../components'
import { IProduct } from '../types'

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
  const dispatch = useDispatch()
  const history = useHistory()
  const query = queryString.parse(useLocation().search)

  const limit = 5
  const page = Number(query.page || 1)

  const list: IProduct[] = useSelector((state: any) => state.products.list)
  const count: number = useSelector((state: any) => state.products.count)

  const onPageClick = (currentPage: number) => {
    history.push(`/products?page=${currentPage}`)
  }
  const listFilter = (_: IProduct, index: number) => {
    return (page - 1) * limit <= index && index < page * limit
  }

  const getList = async () => {
    const { products } = await getProductList()

    products.sort((prev: IProduct, cur: IProduct) => cur.score - prev.score)

    dispatch(listUpdate({ list: products, count: products.length }))
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <Row>{list.filter(listFilter).map(listMap)}</Row>
      <PageStyled onChange={onPageClick} defaultCurrent={page} total={count} />
    </>
  )
}

export default Products
