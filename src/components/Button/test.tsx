import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'

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

  it('should render the small size ', () => {
    renderWithTheme(<Button size="large">Comprar agora</Button>)
    expect(screen.getByRole('button', { name: /Comprar agora/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render fullwidth button', () => {
    renderWithTheme(<Button fullWidth>Comprar agora</Button>)
    expect(screen.getByRole('button', { name: /Comprar agora/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>
        Comprar agora
      </Button>
    )
    expect(screen.getByText(/Comprar agora/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render an minimal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Comprar agora
      </Button>
    )
    expect(screen.getByRole('button', { name: /comprar agora/i })).toHaveStyle({
      background: 'none',
      color: '#460099'
    })

    expect(
      screen.getByRole('button', { name: /comprar agora/i })
    ).toHaveStyleRule('background', 'none', {
      modifier: ':hover'
    })
  })

  it('should render button a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
