import React from 'react'
import * as S from './styles'
import { GameCardProps } from './types'

import {
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'
import Button from 'components/Button'

const GameCard = ({ title, developer, img, price }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button">
        <FavoriteBorder aria-label="Adicionar a lista de desejos" />
      </S.FavButton>
      <S.BuyBox>
        <S.Price>{price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
