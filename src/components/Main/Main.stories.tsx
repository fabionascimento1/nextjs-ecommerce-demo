import Main from '.'
import { withDesign } from 'storybook-addon-designs'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main,
  decorators: [withDesign],
  args: {
    title: 'Value Default',
    description: 'Value Default'
  }
} as Meta

export const Basic = (args) => <Main {...args} />

/* Basic.args = {
  title: 'React Avançado 2',
  description: 'TypeScript, ReactJS, NextJS e Styled Components 2'
}
 */
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
  }
}
