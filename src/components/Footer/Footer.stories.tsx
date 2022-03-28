import Footer from '.'
import { withDesign } from 'storybook-addon-designs'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [withDesign]
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/49wDRTdABuBGYUzXXxPuME/React-Ecommerce?node-id=2%3A11'
  }
}
