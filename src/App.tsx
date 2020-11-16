import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Layout } from 'antd'
import { Home, Products, ProductItem, Carts } from './pages'
import { AppBar } from './components'

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={ProductItem} />
          <Route path="/Carts" component={Carts} />
        </Switch>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Router>
  )
}

export default App
