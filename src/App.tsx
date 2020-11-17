import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from 'antd'
import { Home, Products, ProductItem, Cart } from './pages'
import { AppBar } from './components'

const ContentStyled = styled(Layout.Content)`
  max-width: 1200px;
  padding: 50px 0;
  margin: 0 auto;
`

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <AppBar />
        <ContentStyled>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={ProductItem} />
            <Route path="/Cart" component={Cart} />
          </Switch>
        </ContentStyled>
        <Layout.Footer style={{ textAlign: 'center' }}>FreeVue Copyright © 2020.</Layout.Footer>
      </Layout>
    </Router>
  )
}

export default App
