import * as S from './styles'

import { useSelector } from 'react-redux'
import { AppState } from 'store/modules/rootReducer'

import ToggleMenu from 'components/ToggleMenu'
import Hamburguer from 'components/HamburguerMenu'
import Container from 'components/Container'
import Logo from 'components/Logo'
import Search from 'components/Search'
import MyAccount from 'components/MyAccountDesktop'
import MiniCart from 'components/MiniCart'
import Menu from 'components/Menu'

function Header() {
  const { menu } = useSelector((state: AppState) => state.menu)

  return (
    <>
      <ToggleMenu isOpen={menu} />
      <Container>
        <S.HeaderWrapper>
          <Hamburguer />
          <Logo />
          <Search />
          <MyAccount />
          <MiniCart />
        </S.HeaderWrapper>
      </Container>
      <Menu />
    </>
  )
}

export default Header
