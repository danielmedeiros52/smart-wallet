import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import store from '@/redux';
import { Provider } from 'react-redux';

import theme from '../styles/themeConfig';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
         <ConfigProvider theme={theme}>
           <Component {...pageProps} />
         </ConfigProvider>
  </Provider>
);

export default App;