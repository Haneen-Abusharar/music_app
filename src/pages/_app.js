import React from 'react'
import Layout from '@/components/Layout/layout'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
