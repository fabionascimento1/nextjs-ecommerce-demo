import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading/>', () => {
  it('should render a color heading default', () => {
    renderWithTheme(<Heading>Ecommerce Demo In NextJS React</Heading>)
    expect(
      screen.getByRole('heading', { name: /Ecommerce Demo In NextJS React/i })
    ).toHaveStyle({
      color: '#460099'
    })
  })
})
