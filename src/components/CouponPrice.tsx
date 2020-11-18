import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import { PriceRow } from './'
import { getCoupontList } from '../api'
import { ICouponListItem } from '../types'

interface IProps {
  totalPrice: number
}

interface ICouponSelectListItem extends ICouponListItem {
  id: number
  value: number
}

const SelectStyled = styled(Select)`
  width: 200px;
  .ant-select-selector {
    border-radius: 8px;
  }
`

const CouponPrice: React.FC<IProps> = (props) => {
  const [list, setList] = useState([])
  const onCouponChange = (value: any) => {
    console.log(value)
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
      <PriceRow title="총 상품 가격" price={props.totalPrice} />
      <PriceRow price={props.totalPrice}>
        <SelectStyled labelInValue size="large" placeholder="쿠폰을 선택해주세요." onChange={onCouponChange}>
          {list.map((item: ICouponSelectListItem) => {
            return (
              <Select.Option key={item.id} value={item.id}>
                {item.title}
              </Select.Option>
            )
          })}
        </SelectStyled>
      </PriceRow>
    </>
  )
}

export default CouponPrice
