import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a Black label by default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Ecommerce Demo In NextJS React/i).parentElement
    ).toHaveStyle({
      color: '#16193A'
    })
  })
})
