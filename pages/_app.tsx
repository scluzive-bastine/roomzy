import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { Provider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
