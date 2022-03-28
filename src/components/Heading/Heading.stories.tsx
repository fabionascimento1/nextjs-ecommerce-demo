import Heading from '.'
import { withDesign } from 'storybook-addon-designs'
import { Meta, Story } from '@storybook/react/types-6-0'
import { HeadingProps } from './types'

export default {
  title: 'Components/Heading',
  component: Heading,
  decorators: [withDesign],
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'H2 Title'
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/49wDRTdABuBGYUzXXxPuME/React-Ecommerce?node-id=5%3A9'
  }
}
