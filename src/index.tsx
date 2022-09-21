import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '@redux/configureStore'
import Web3Provider from '@components/Web3Provider'

// WalletConnect does not work with webpack 5 i.e. react@18+
// This is required to make it work
import { Buffer } from 'buffer'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as unknown as any).Buffer = (window as unknown as any).Buffer || Buffer

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3Provider />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
