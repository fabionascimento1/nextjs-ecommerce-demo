import React from 'react'
import SectionProducts from 'components/SectionProducts'
import Meta from 'components/MetaContent'

export default function Home() {
  return (
    <>
      <Meta
        title="Ecommerce Demo Next.js"
        seoTitle="Ecommerce Demo React Next.js"
        seoDescription="Ecommece demo React Next.js Desenvolvimento de sites com tecnologias Modernas"
      />
      <SectionProducts />
    </>
  )
}
