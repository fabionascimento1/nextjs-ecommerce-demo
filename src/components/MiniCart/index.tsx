import Link from 'next/link'

import { useSelector } from 'react-redux'
import { AppState } from 'store/modules/rootReducer'

import * as S from './styles'

import { FaShoppingBasket } from 'react-icons/fa'

function MiniCart() {
  const { data } = useSelector((state: AppState) => state.cart)

  const cartSize = data.reduce((total, p) => {
    return total + p.amount
  }, 0)

  return (
    <S.CartWrapper>
      <Link href="/cart">
        <a title="Carrinho de compras">
          <div className="basket">
            <FaShoppingBasket size="28" />
          </div>
          <span className="count">{cartSize}</span>
        </a>
      </Link>
    </S.CartWrapper>
  )
}

export default MiniCart
