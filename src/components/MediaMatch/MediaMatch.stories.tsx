import MediaMatch from '.'
import { withDesign } from 'storybook-addon-designs'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  decorators: [withDesign]
} as Meta

export const Desktop = () => <MediaMatch>Only Desktop</MediaMatch>

/* Component.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/49wDRTdABuBGYUzXXxPuME/React-Ecommerce?node-id=2%3A11'
  }
} */
