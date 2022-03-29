import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import HighlightMock from 'components/Highlight/mock'
import GamesMock from 'components/GameCardSlider/mock'

export default function Index(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedGames: GamesMock,
      recommendedHighlight: HighlightMock,
      games: GamesMock
    }
  }
}
