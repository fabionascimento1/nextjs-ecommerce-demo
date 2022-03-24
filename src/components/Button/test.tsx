import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Comprar agora</Button>)
    expect(screen.getByRole('button', { name: /Comprar agora/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size ', () => {
    renderWithTheme(<Button size="small">Comprar agora</Button>)
    expect(screen.getByRole('button', { name: /Comprar agora/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })
})
