import React from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import { PriceRow } from './'

const SelectStyled = styled(Select)`
  width: 200px;
  .ant-select-selector {
    border-radius: 8px;
  }
`

interface IProps {
  totalPrice: number
}

const CouponPrice: React.FC<IProps> = (props) => {
  return (
    <>
      <PriceRow title="총 상품 가격" price={props.totalPrice} />
      <PriceRow price={props.totalPrice}>
        <SelectStyled labelInValue size="large" placeholder="쿠폰을 선택해주세요.">
          <Select.Option value="jack">Jack (100)</Select.Option>
          <Select.Option value="lucy">Lucy (101)</Select.Option>
        </SelectStyled>
      </PriceRow>
    </>
  )
}

export default CouponPrice
