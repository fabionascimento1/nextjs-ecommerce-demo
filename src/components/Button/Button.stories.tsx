import Button from '.'
import { withDesign } from 'storybook-addon-designs'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Component = (args) => <Button {...args} />

Component.args = {
  children: 'Comprar agora'
}

Component.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/49wDRTdABuBGYUzXXxPuME/React-Ecommerce?node-id=20%3A3'
  }
}
