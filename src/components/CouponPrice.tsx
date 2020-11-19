import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import { PriceRow } from './'
import { getCoupontList } from '../api'
import { ICouponListItem } from '../types'

interface IProps {
  totalPrice: number
}

interface ISelectValue {
  key: number
  label: string
  value: number
}

interface ICouponSelectListItem {
  id: number
  title: string
  type: string
  value: number
}

const SelectStyled = styled(Select)`
  width: 200px;
  .ant-select-selector {
    border-radius: 8px;
  }
`
const DiscountStyled = styled.p`
  margin: auto auto 0 5px;
  opacity: 0.5;
`
const listMap = (item: any) => {
  return (
    <Select.Option key={item.id} value={item.id}>
      {item.title}
    </Select.Option>
  )
}
const CouponPrice: React.FC<IProps> = (props) => {
  const [list, setList] = useState<ICouponListItem[]>([])
  const [discount, setDiscount] = useState('')
  const [amount, setAmount] = useState(0)
  const onCouponChange = ({ value }: any) => {
    const coupon: any = list[value]

    if (coupon.type === 'amount') {
      setAmount(props.totalPrice > 0 ? coupon.value : 0)
      setDiscount(`${coupon.value} 원`)
    } else if (coupon.type === 'rate') {
      setAmount(props.totalPrice * (coupon.value / 100))
      setDiscount(`${coupon.value} %`)
    }
  }

  const getCouponList = async () => {
    try {
      const { coupons } = await getCoupontList()

      const couponsMap = (coupon: ICouponListItem, index: number) => {
        const value = coupon.discountAmount ? coupon.discountAmount : coupon.discountRate ? coupon.discountRate : 0

        return {
          id: index,
          title: coupon.title,
          type: coupon.type,
          value,
        }
      }

      setList(coupons.map(couponsMap))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCouponList()
  }, [])

  return (
    <>
      <PriceRow price={amount}>
        <SelectStyled labelInValue size="large" placeholder="쿠폰을 선택해주세요." onChange={onCouponChange}>
          {list.map(listMap)}
        </SelectStyled>
        {/*
          해당 기능을 넣을지 고민...
          <DiscountStyled>{discount}</DiscountStyled>
        */}
      </PriceRow>
    </>
  )
}

export default CouponPrice
