import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'store/modules/rootReducer'
import toggleMenu from 'store/modules/hamburguerMenu/actions'

import * as S from './styles'

function Hamburguer() {
  const { menu } = useSelector((state: AppState) => state.menu)

  const dispatch = useDispatch()

  function handleMenu() {
    if (menu === 'none') dispatch(toggleMenu('block'))
    else dispatch(toggleMenu('none'))
  }
  return (
    <S.HamburguerWrapper>
      <a onClick={handleMenu} className="hamburguer__button">
        <span></span>
        <span></span>
      </a>
    </S.HamburguerWrapper>
  )
}

export default Hamburguer
