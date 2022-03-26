import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 column topics', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contato/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Follows/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
