import { Provider } from 'react-redux'
import type { AppProps } from 'next/app';

import store from '@/redux/Store';
import '@/styles/globals.css'
import Layout from '@/components/layouts/Layout';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
