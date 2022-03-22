import * as S from './styles'

import { FaSistrix, FaTimesCircle } from 'react-icons/fa'

function Search() {
  return (
    <S.SearchWrapper>
      <input type="text" placeholder="Buscar produtos..." />
      <button>
        <FaSistrix size="24" />
      </button>

      <a className="close">
        <FaTimesCircle />
      </a>
    </S.SearchWrapper>
  )
}

export default Search
