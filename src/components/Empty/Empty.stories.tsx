import { Story, Meta } from '@storybook/react/types-6-0'
import Empty from '.'
import { EmptyProps } from './types'

export default {
  title: 'Game/Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<EmptyProps>

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}
