import Base from 'templates/Base'

import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import TextContent from 'components/TextContent'
import Showcase from 'components/Showcase'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard/types'
import { HighlightProps } from 'components/Highlight/types'

import * as S from './styles'
import Image from 'next/image'

export type GameTemplateProps = {
  slug?: string
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedTitle?: string
  recommendedGames?: GameCardProps[]
}

const Game = ({
  slug,
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight
}: GameTemplateProps) => (
  <Base>
    <S.Cover>
      <Image src={cover} alt="cy" layout="fill" />
    </S.Cover>
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
      {!!gallery && (
        <S.SectionGallery>
          <Gallery items={gallery} />
        </S.SectionGallery>
      )}
      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>
      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>
      <Showcase
        title="Upcomming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />
    </S.Main>
  </Base>
)

export default Game
