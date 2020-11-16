import React from 'react'
import { Link } from "react-router-dom"
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import Logo from '~/assets/img/logo.png'

const LogoWrapStyled = styled.div`
  width: 80px;
  margin-right: 20px;
  img {
    display: block;
    width: 100%;
    filter: invert(100%);
  }
`
const AppBarStyled = styled(Layout.Header)`
  display: flex;
  align-items: center;
`

const AppBar: React.FC = () => {
  return (
    <AppBarStyled>
      <LogoWrapStyled>
        <img src={Logo} alt="Logo"/>
      </LogoWrapStyled>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/products">상품 목록</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/carts">장바구니</Link>
        </Menu.Item>
      </Menu>
    </AppBarStyled>
  )
}

export default AppBar
