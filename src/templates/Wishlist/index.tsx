import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import GameCard from 'components/GameCard'
import { GameCardProps } from 'components/GameCard/types'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'

import * as S from './styles'
import { HighlightProps } from 'components/Highlight/types'
import { Swagger } from 'styled-icons/simple-icons'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container data-cy="wishlist">
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        <Divider />
      </Container>

      <Showcase games={recommendedGames} highlight={recommendedHighlight} />
    </Base>
  )
}

export default Wishlist
