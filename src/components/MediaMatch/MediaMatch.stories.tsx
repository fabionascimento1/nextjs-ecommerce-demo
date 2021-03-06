import MediaMatch from '.'
import { withDesign } from 'storybook-addon-designs'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Components/MediaMatch',
  component: MediaMatch,
  decorators: [withDesign]
} as Meta

export const Desktop = () => (
  <MediaMatch greaterThan="medium">Only Desktop</MediaMatch>
)

export const Mobile = () => (
  <MediaMatch lessThan="medium">Only Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

/* Component.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/49wDRTdABuBGYUzXXxPuME/React-Ecommerce?node-id=2%3A11'
  }
} */
