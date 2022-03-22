import Link from 'next/link'

import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'store/modules/rootReducer'
import { Cart as InterfaceCart } from 'store/modules/cart/types'
import * as CartActions from 'store/modules/cart/actions'

import { formatPrice } from 'utils/format'

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'

import * as S from './styles'

function Cart() {
  const { data } = useSelector((state: AppState) => state.cart)

  const cartSize = data.reduce((total, p) => {
    return total + p.amount
  }, 0)

  const newArrayProducts = data.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  }))

  const total = formatPrice(
    data.reduce((totalAmount, product) => {
      return totalAmount + product.price * product.amount
    }, 0)
  )

  const dispatch = useDispatch()

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1))
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1))
  }

  return (
    <S.Wrapper>
      {cartSize !== 0 ? (
        <>
          <S.ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUTO</th>
                <th>QUANTIDADE</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {newArrayProducts.map((product: InterfaceCart) => (
                <tr key={product.id}>
                  <td>
                    <figure>
                      <img src={product.image} alt={product.title} />
                    </figure>
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="text" readOnly value={product.amount} />
                      <button type="button" onClick={() => increment(product)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </S.ProductTable>

          <footer>
            <button type="submit">Finalizar a Comprar</button>
            <S.Total>
              <span>TOTAL:</span>
              <strong>{total}</strong>
            </S.Total>
          </footer>
        </>
      ) : (
        <div>
          Seu Carrinho de compras está vazio.{' '}
          <Link href="/">
            <a title="home">
              Volte para página inicial do site e comece a comprar.
            </a>
          </Link>{' '}
          Obrigado.
        </div>
      )}
    </S.Wrapper>
  )
}

export default Cart
