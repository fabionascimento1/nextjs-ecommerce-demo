import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import React from 'react'
import Highlight from 'components/Highlight'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

const Home = () => (
  <Container>
    <Menu />
    <Highlight {...props} alignment="left" />
    <Footer />
  </Container>
)

export default Home
