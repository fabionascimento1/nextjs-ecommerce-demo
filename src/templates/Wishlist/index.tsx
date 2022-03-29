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
import { Grid } from 'components/Grid'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  games?: GameCardProps[]
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container data-cy="wishlist">
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
        <Divider />
      </Container>

      <Showcase games={recommendedGames} highlight={recommendedHighlight} />
    </Base>
  )
}

export default Wishlist
