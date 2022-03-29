import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import Link from 'next/link'
import React from 'react'
import * as S from './styles'

import { BannerProps } from './types'

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title}></S.Image>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Link href={buttonLink} passHref>
        <Button as="a" size="large">
          {buttonLabel}
        </Button>
      </Link>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
