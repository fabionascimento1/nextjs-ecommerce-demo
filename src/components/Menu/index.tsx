import * as S from './styles'
import Container from 'components/Container'
import MenuItems from 'components/MenuItems'

function Menu() {
  return (
    <S.MenuWrapper>
      <Container>
        <MenuItems />
      </Container>
    </S.MenuWrapper>
  )
}

export default Menu
