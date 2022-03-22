import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import * as CartActions from 'store/modules/cart/actions'
import { AppState } from 'store/modules/rootReducer'

import Loader from 'react-loader-spinner'

import * as S from './styles'

import { FaCartArrowDown, FaShoppingBasket } from 'react-icons/fa'

type Props = {
  key: number
  id: number
  title: string
  price: number
  image: string
}

function ProductCardID({ id, title, image, price }: Props) {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const { data } = useSelector((state: AppState) => state.cart)

  const amount = data.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount

    return sumAmount
  }, {})

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id))
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <S.Wrapper>
      <S.Card key={id}>
        <S.Image>
          <source srcSet={image} type="image/webp" />
          <source srcSet={image} type="image/png" />
          <img src={image} loading="lazy" alt={title} />
        </S.Image>
        <div>
          <S.Title>{title}</S.Title>
          <S.Price>{price}</S.Price>

          <S.Buy type="button" onClick={() => handleAddProduct(id)}>
            {loading ? (
              <Loader type="Oval" color="#FFF" height={16} width={24} />
            ) : (
              <div>
                <FaCartArrowDown size={22} /> {amount[id] || 0}
              </div>
            )}

            <span>
              <FaShoppingBasket size="28" /> Adicionar ao Carinho
            </span>
          </S.Buy>
        </div>
      </S.Card>
    </S.Wrapper>
  )
}

export default ProductCardID
