import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import api from 'services/api'
import { formatPrice } from 'utils/format'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ProductCardID from 'components/ProductCardID'
import Meta from 'components/MetaContent'

function Product() {
  const router = useRouter()
  const { id } = router.query

  const [product, setProduct] = useState([undefined])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/products?id=${id}`)
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))
      setProduct(data)
      setLoading(false)
    }
    loadProduct()
  }, [id])

  return (
    <Container>
      {loading ? (
        <div>Carregando ....</div>
      ) : (
        <div>
          <Meta
            title={product[0].title}
            seoTitle="Ecommerce Demo React Next.js"
            seoDescription="Ecommece demo React Next.js Desenvolvimento de sites com tecnologias Modernas"
          />

          <Heading reverseColor>{product[0].title}</Heading>
          <ProductCardID
            key={product[0].id}
            id={product[0].id}
            title={product[0].title}
            price={product[0].priceFormatted}
            image={product[0].image}
          />
        </div>
      )}
    </Container>
  )
}

export default Product
