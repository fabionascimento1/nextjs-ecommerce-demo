import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import React from 'react'
import Highlight from 'components/Highlight'
import Heading from 'components/Heading'

const Home = () => (
  <>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading>Novidades</Heading>
    </Container>

    <Container>
      <Heading>Mais Populares</Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </>
)

export default Home
