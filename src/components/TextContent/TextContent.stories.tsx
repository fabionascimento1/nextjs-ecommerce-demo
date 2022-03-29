import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent from '.'
import { TextContentProps } from './types'
import textMock from './mock'

export default {
  title: 'Game/TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<TextContentProps>

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
