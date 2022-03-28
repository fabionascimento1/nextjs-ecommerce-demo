import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render the Home', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/abrir o menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /novidades/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Mais Populares/i })
    ).toBeInTheDocument()
  })
})
