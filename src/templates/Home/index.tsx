import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import React from 'react'
import Heading from 'components/Heading'
import { HomeTemplateProps } from './types'
import BannerSlider from 'components/BannerSlider'
import Highlight from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'

const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames
}: HomeTemplateProps) => (
  <>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading>Novidades</Heading>
      <Highlight
        {...mostPopularHighLight}
        alignment="left"
        floatImage="/img/red-dead-float.png"
      />
      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading>Mais Populares</Heading>
      <Highlight {...mostPopularHighLight} />
      <GameCardSlider items={mostPopularGames} color="black" />
    </Container>

    <Container>
      <Footer />
    </Container>
  </>
)

export default Home
