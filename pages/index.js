import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>La barbe à jojo!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Comment se raser les couilles et en faire une barbes " />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
