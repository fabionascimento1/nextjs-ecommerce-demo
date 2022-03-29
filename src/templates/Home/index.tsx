import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import React from 'react'
import Heading from 'components/Heading'
import { HomeTemplateProps } from './types'
import BannerSlider from 'components/BannerSlider'
import Highlight from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="Novidades" games={newGames}></Showcase>
    </S.SectionNews>

    <Showcase
      title="Free Games"
      highlight={mostPopularHighLight}
      games={mostPopularGames}
    />

    <Container>
      <S.SectionMostPopular>
        <Heading reverseColor lineColor="secondary">
          Mais Populares
        </Heading>

        <Highlight {...mostPopularHighLight} />
        <GameCardSlider items={mostPopularGames} color="black" />
      </S.SectionMostPopular>
    </Container>
  </Base>
)

export default Home
