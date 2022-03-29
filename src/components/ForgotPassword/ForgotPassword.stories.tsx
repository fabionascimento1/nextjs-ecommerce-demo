import { Story, Meta } from '@storybook/react/types-6-0'
import ForgotPassword from '.'

export default {
  title: 'Form/ForgotPassword',
  component: ForgotPassword
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <ForgotPassword />
  </div>
)
