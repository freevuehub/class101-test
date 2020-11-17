import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { getProductList } from '../api'

const Products: React.FC = () => {
  useEffect(() => {
    getProductList()
  }, [])

  return <Layout.Content>Products</Layout.Content>
}

export default Products
