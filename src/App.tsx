import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from 'antd'
import { Home, Products, Cart } from './pages'
import { AppBar } from './components'

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`
const ContentStyled = styled(Layout.Content)`
  max-width: 1200px;
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
`

const App: React.FC = () => {
  return (
    <Router>
      <LayoutStyled>
        <AppBar />
        <ContentStyled>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/Cart" component={Cart} />
          </Switch>
        </ContentStyled>
        <Layout.Footer style={{ textAlign: 'center' }}>FreeVue Copyright © 2020.</Layout.Footer>
      </LayoutStyled>
    </Router>
  )
}

export default App
