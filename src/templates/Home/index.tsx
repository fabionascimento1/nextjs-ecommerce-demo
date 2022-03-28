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

const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames
}: HomeTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading>Novidades</Heading>
        <Highlight
          {...mostPopularHighLight}
          alignment="left"
          floatImage="/img/red-dead-float.png"
        />
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading reverseColor lineColor="secondary">
          Mais Populares
        </Heading>

        <Highlight {...mostPopularHighLight} />
        <GameCardSlider items={mostPopularGames} color="black" />
      </S.SectionMostPopular>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)

export default Home
