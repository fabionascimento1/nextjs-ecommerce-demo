import { RibbonColors, RibbonSizes } from 'components/Ribbon/types'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

export type ImageProps = {
  src: string
}
