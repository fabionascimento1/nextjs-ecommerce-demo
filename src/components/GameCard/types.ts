import { RibbonColors, RibbonSizes } from 'components/Ribbon/types'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

export type PriceProps = {
  isPromotional?: boolean
}
