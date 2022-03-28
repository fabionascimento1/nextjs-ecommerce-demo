import Highlight from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { HighlightProps } from './types'

import item from './mock'

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: { ...item }
} as Meta<HighlightProps>

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
