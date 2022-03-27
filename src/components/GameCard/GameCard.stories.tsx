import GameCard from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { GameCardProps } from './types'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235
  }
} as Meta<GameCardProps>

export const Component: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
