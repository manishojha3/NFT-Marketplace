import Contact from '@/components/Contact'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <>
      <Head>
        <title>NFTPlace - Contact Us</title>
      </Head>
      <div className="contact">
        <Contact />
      </div>
    </>
  )
}

export default contact