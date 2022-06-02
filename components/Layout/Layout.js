import Head from 'next/head'
import { useProviderContext } from '../../context/context'
import Footer from '../Footer'
import Header from '../Header'
import SearchForm from '../SearchForm'

export default function Layout({ children }) {
  const { isSearchOpen } = useProviderContext()
  return (
    <>
      <Head>
        <title>Traveling and Booking simplified </title>
      </Head>
      <Header />
      <main className="overflow-hidden">
        {isSearchOpen ? <SearchForm /> : null}
        {children}
      </main>
      <Footer />
    </>
  )
}
