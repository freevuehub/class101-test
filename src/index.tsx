import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store'
import App from './App'

import 'antd/dist/antd.css'

const store = createStore(rootReducer)
const root: HTMLElement | null = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
)
