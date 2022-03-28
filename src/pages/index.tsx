import React from 'react'
import Home from 'templates/Home'
import { HomeTemplateProps } from 'templates/Home/types'
import Meta from 'components/MetaContent'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCard/mock'
import highLightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return (
    <>
      <Meta
        title="Ecommerce Next React Demo"
        seoDescription="Ecommerce Next React Demo"
        seoTitle="Ecommerce Next React Demo"
      />
      <Home {...props} />
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      mostPopularHighLight: highLightMock,
      newGames: gamesMock,
      mostPopularGames: gamesMock
    }
  }
}
