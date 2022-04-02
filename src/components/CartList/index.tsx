import Link from 'next/link'
import Button from 'components/Button'
import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'
import Empty from 'components/Empty'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
}

const CartList = ({ items, total }: CartListProps) => {
  return (
    <S.Wrapper isEmpty={!items.length} data-cy="cart-list">
      {items.length ? (
        <>
          <S.GamesList>
            {items.map((item) => (
              <GameItem key={item.title} {...item} />
            ))}
          </S.GamesList>

          <S.Footer>
            <S.Total>{total}</S.Total>

            <Link href="/cart" passHref>
              <Button as="a">Buy it now</Button>
            </Link>
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers."
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
