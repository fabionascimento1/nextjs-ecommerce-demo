import Container from 'components/Container'
import Heading from 'components/Heading'
import Cart from 'components/Cart'
import Meta from 'components/MetaContent'

function PageCart() {
  return (
    <>
      <Meta
        title="Carrinho de compras"
        seoTitle="Ecommerce Demo React Next.js"
        seoDescription="Ecommece demo React Next.js Desenvolvimento de sites com tecnologias Modernas"
      />
      <Container>
        <Heading reverseColor>Carrinho de compras</Heading>
        <Cart />
      </Container>
    </>
  )
}

export default PageCart
