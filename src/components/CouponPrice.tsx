import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import { PriceRow } from './'
import { getCoupontList } from '../api'
import { ICouponListItem } from '../types'

interface IProps {
  totalPrice: number
  onChange: (price: number) => void
}

interface ICouponSelectItem extends ICouponListItem {
  id: number
  value: number
}

const SelectStyled = styled(Select)`
  width: 200px;
  .ant-select-selector {
    border-radius: 8px;
  }
`

const listMap = (item: ICouponSelectItem) => {
  return (
    <Select.Option key={item.id} value={item.id}>
      {item.title}
    </Select.Option>
  )
}
const CouponPrice: React.FC<IProps> = (props) => {
  const [list, setList] = useState<ICouponSelectItem[]>([])
  const [coupon, setCoupon] = useState<ICouponSelectItem | null>(null)
  const [discount, setDiscount] = useState<number>(0)

  const useDiscountPrice = () => {
    if (coupon) {
      if (coupon.type === 'amount') {
        setDiscount(props.totalPrice > 0 ? coupon.value : 0)

        props.onChange(props.totalPrice > 0 ? coupon.value : 0)
      } else if (coupon.type === 'rate') {
        setDiscount(props.totalPrice * (coupon.value / 100))

        props.onChange(props.totalPrice * (coupon.value / 100))
      }
    }
  }

  const onCouponChange = (value: any) => {
    const item: ICouponSelectItem = list[value.value]

    setCoupon(item ? item : null)
  }

  const getCouponList = async () => {
    try {
      const { coupons } = await getCoupontList()

      const couponsMap = (item: ICouponListItem, index: number) => {
        const { discountAmount, discountRate, title, type } = item
        const value = discountAmount ? discountAmount : discountRate ? discountRate : 0

        return {
          id: index,
          title,
          type,
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
  useEffect(useDiscountPrice, [props.totalPrice, coupon])

  return (
    <>
      <PriceRow price={discount}>
        <SelectStyled labelInValue size="large" placeholder="쿠폰을 선택해주세요." onChange={onCouponChange}>
          {list.map(listMap)}
        </SelectStyled>
      </PriceRow>
    </>
  )
}

export default CouponPrice
