import React from 'react'
import { useParams } from "react-router-dom"
import { Layout } from 'antd'

interface IParams {
  id: string
}

const ProductItem: React.FC = () => {
  const { id }: IParams = useParams()

  return (
    <Layout.Content>
      ProductItem {id}
    </Layout.Content>
  )
}

export default ProductItem
