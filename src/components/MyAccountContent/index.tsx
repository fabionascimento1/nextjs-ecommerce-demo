import * as S from './styles'

import { FaUserAlt } from 'react-icons/fa'

function MyAccountContent() {
  return (
    <S.Wrapper>
      <a>
        <FaUserAlt /> <a href="#">Minha Conta</a>
      </a>
    </S.Wrapper>
  )
}

export default MyAccountContent
