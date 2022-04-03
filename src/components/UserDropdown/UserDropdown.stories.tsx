import { Story, Meta } from '@storybook/react/types-6-0'
import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'Components/UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<UserDropdownProps>

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
)

Default.args = {
  username: 'Willian'
}
