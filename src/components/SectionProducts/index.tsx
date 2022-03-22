import React, { useEffect, useState } from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProductCard from 'components/ProductCard'
import ProductsPlaceholder from 'components/ProductsPlaceholder'
import { formatPrice } from 'utils/format'

import * as S from './styles'

import api from 'services/api'

function SectionProducts() {
  const [products, setProducts] = useState([undefined])
  const [loading, setLoading] = useState(true)
  const [repeatCount, setRepeatCount] = useState()

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products')
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))
      setProducts(data)
      setRepeatCount(response.data.length)
      setLoading(false)
    }
    loadProducts()
  }, [])
  return (
    <Container>
      <Heading reverseColor>Destaques</Heading>
      <S.Content>
        {loading ? (
          <ProductsPlaceholder repeatCount={repeatCount} />
        ) : (
          <>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.priceFormatted}
                image={product.image}
              />
            ))}
          </>
        )}
      </S.Content>
    </Container>
  )
}

export default SectionProducts
