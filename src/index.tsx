import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import rootReducer from './store'
import App from './App'
import { IStoreState } from './types'

import 'antd/dist/antd.css'

const store: Store<IStoreState> = createStore(rootReducer)
const root: HTMLElement | null = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
)
