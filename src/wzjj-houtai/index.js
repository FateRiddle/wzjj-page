import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'
import App from './components/App/index'

const store = configureStore()

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)
