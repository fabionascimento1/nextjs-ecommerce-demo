import Button from '.'
import { withDesign } from 'storybook-addon-designs'
import { Meta, Story } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default = (args) => <Button {...args} />

Default.args = {
  children: 'Comprar agora'
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/49wDRTdABuBGYUzXXxPuME/React-Ecommerce?node-id=20%3A3'
  }
}

export const withIcon = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Comprar agora',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  children: 'Comprar agora',
  as: 'a',
  href: '/link'
}
