export type HeadingProps = {
  reverseColor?: boolean
  lineBottom?: boolean
  lineLeft?: boolean
  children: React.ReactNode
  size?: 'small' | 'medium'
  lineColor?: LineColors
}

export type LineColors = 'primary' | 'secondary'
