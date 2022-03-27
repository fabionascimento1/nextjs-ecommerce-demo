import Banner from '.'
import { withDesign } from 'storybook-addon-designs'
import { Meta, Story } from '@storybook/react/types-6-0'

import { BannerProps } from './types'

export default {
  title: 'Banner',
  component: Banner,
  decorators: [withDesign],
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Component: Story<BannerProps> = (args) => <Banner {...args} />

Component.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/49wDRTdABuBGYUzXXxPuME/React-Ecommerce?node-id=2%3A11'
  }
}
