import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  seoTitle: string
  seoDescription: string
}

const Meta = ({ title, seoTitle, seoDescription }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
      </Head>
    </>
  )
}

export default Meta
