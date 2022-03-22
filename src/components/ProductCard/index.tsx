import React, { useState } from 'react'

import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import * as CartActions from 'store/modules/cart/actions'
import { AppState } from 'store/modules/rootReducer'

import Loader from 'react-loader-spinner'

import * as S from './styles'
import { FaCartArrowDown } from 'react-icons/fa'

type Props = {
  key: number
  id: number
  title: string
  price: number
  image: string
}

function ProductCard({ id, title, image, price }: Props) {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

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
    <S.Card key={id}>
      <Link href="/[id]" as={'/' + id}>
        <a>
          <S.Image>
            <source srcSet={image} type="image/webp" />
            <source srcSet={image} type="image/png" />
            <img src={image} loading="lazy" alt={title} />
          </S.Image>
        </a>
      </Link>

      <S.Title>{title}</S.Title>
      <S.Price>{price}</S.Price>

      <S.Buy type="button" onClick={() => handleAddProduct(id)}>
        {loading ? (
          <Loader type="Oval" color="#000" height={16} width={24} />
        ) : (
          <div>
            <FaCartArrowDown size={16} /> {amount[id] || 0}
          </div>
        )}

        <span>Adicionar ao Carinho</span>
      </S.Buy>
    </S.Card>
  )
}

export default ProductCard
