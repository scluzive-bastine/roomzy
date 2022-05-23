import Head from 'next/head'
import Footer from '../Footer'
import Header from '../Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Traveling and Booking simplified </title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
