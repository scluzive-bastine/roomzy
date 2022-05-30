import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { Provider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default MyApp
