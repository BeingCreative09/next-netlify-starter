import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ganpati Bappa Morya" />
        <iframe src="/GANAPATHI_AARTI.pdf" width="100%" />
      </main>

      <Footer />
    </div>
  )
}
