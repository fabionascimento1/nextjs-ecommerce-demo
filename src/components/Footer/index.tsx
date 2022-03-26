import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import React from 'react'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo />
    <S.Content>
      <S.Column>
        <Heading size="small" lineBottom lineColor="secondary">
          Contato
        </Heading>
        <a href="">agsuperpoder@gmail.com</a>
      </S.Column>
      <S.Column aria-labelledby="social-media">
        <Heading size="small" lineBottom lineColor="secondary">
          Follows
        </Heading>
        <nav id="social-media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Footer
