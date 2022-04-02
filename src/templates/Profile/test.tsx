import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Profile>ds</Profile>)

    expect(
      screen.getByRole('heading', { name: /Profile/i })
    ).toBeInTheDocument()
  })
})
