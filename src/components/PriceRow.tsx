import React from 'react'
import styled from 'styled-components'
import { priceString } from '../utils'

interface IProps {
  title?: string
  count?: number
  price: number
}

const PriceRowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 0;
    span {
      margin-left: 5px;
      font-size: 13px;
    }
  }
`

const PriceRow: React.FC<IProps> = (props) => {
  return (
    <PriceRowStyled>
      {props.children ? (
        props.children
      ) : (
        <h3>
          {props.title} {typeof props.count === 'number' && <span>x {props.count}</span>}
        </h3>
      )}
      <h1>{priceString(props.price)}원</h1>
    </PriceRowStyled>
  )
}

export default PriceRow
