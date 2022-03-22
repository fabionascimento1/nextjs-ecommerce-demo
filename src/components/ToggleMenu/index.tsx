import { useDispatch } from 'react-redux'
import toggleMenu from 'store/modules/hamburguerMenu/actions'

import * as S from './styles'

import MyAccountMobile from 'components/MyAccountMobile'
import MenuItems from 'components/MenuItems'

function HamburguerMenu({ isOpen }) {
  const dispatch = useDispatch()

  function HandleClose() {
    dispatch(toggleMenu('none'))
  }

  return (
    <S.Wrapper style={{ display: `${isOpen}` }}>
      <S.Header>
        <div className="buttonClose">
          <a onClick={HandleClose} className="close">
            <span></span>
            <span></span>
          </a>
        </div>
        <MyAccountMobile />
      </S.Header>
      <S.ListItems>
        <MenuItems />
      </S.ListItems>
    </S.Wrapper>
  )
}

export default HamburguerMenu
