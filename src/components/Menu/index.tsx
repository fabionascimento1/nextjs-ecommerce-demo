import React, { useState } from 'react'
import * as S from './styles'

import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material/Close'

import Logo from 'components/Logo'
import Button from 'components/Button'

import { MenuProps } from './type'

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Abrir o menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile data-testid="LogoMenu" />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Pesquisar" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Carrinho de compra" />
        </S.IconWrapper>
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="fechar menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink>Novidades</S.MenuLink>
          <S.MenuLink>Mais Vendidos</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink>Acesse sua conta</S.MenuLink>
              <S.MenuLink>Acesse sua lista de desejos</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Faça seu login
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Crie seu cadastro de acesso">
              Crie sua conta com segurança
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
