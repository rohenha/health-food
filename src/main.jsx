import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { App } from 'antd'

import { Routes } from '@generouted/react-router'

import './styles/global.scss'

createRoot(document.getElementById('root')).render(
  // <ConfigProvider
  //   theme={{
  //     token: {
  //       // Seed Token
  //       // colorPrimary: '#092635',
  //       // borderRadius: 2,
  //       // Alias Token
  //       // colorBgContainer: '#9EC8B9',
  //     },
  //   }}
  // >
    <App>
        <Routes />
    </App>
  // </ConfigProvider>
  // </ToastContextProvider>
)
