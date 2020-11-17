import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import queryString from 'query-string'
import { Row, Col, Pagination } from 'antd'
import { listUpdate } from '../store/products'
import { getProductList } from '../api'
import { ProductListItem } from '../components'
import { IProduct, IStoreState, TypeMapProduct } from '../types'

const ColStyled = styled(Col)`
  padding: 15px;
`
const PageStyled = styled(Pagination)`
  text-align: center;
  margin-top: 20px;
`

const listMap = ([id, item]: [string, IProduct]) => (
  <ColStyled key={id} span={8} className="gutter-row">
    <ProductListItem item={item} />
  </ColStyled>
)
const Products: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const query = queryString.parse(useLocation().search)

  const limit = 5
  const page = Number(query.page || 1)

  const list: TypeMapProduct = useSelector((state: IStoreState) => state.products.list)
  const count: number = useSelector((state: IStoreState) => state.products.count)

  const onPageClick = (currentPage: number) => {
    history.push(`/products?page=${currentPage}`)
  }
  const listFilter = (_: [string, IProduct], index: number) => {
    return (page - 1) * limit <= index && index < page * limit
  }

  const getList = async () => {
    const { products } = await getProductList()

    products.sort((prev: IProduct, cur: IProduct) => cur.score - prev.score)

    dispatch(
      listUpdate({
        list: products.reduce((prev, cur: IProduct) => prev.set(cur.id, cur), new Map<string, IProduct>()),
        count: products.length,
      }),
    )
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <Row justify="center">{[...list].filter(listFilter).map(listMap)}</Row>
      <PageStyled onChange={onPageClick} defaultPageSize={limit} current={page} total={count} />
    </>
  )
}

export default Products
