import Logo from '.'
import { withDesign } from 'storybook-addon-designs'
import { Meta, Story } from '@storybook/react/types-6-0'
import { LogoProps } from './types'

export default {
  title: 'Logo',
  component: Logo,
  decorators: [withDesign]
} as Meta

export const Component: Story<LogoProps> = (args) => <Logo {...args} />

Component.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/49wDRTdABuBGYUzXXxPuME/React-Ecommerce?node-id=5%3A8'
  }
}
