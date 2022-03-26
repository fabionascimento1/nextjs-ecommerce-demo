import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/abrir o menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pesquisar/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Carrinho de compra/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Ecommerce Demo In NextJS React/i })
    ).toBeInTheDocument()
  })
  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/abrir o menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/fechar menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
  it('should render register box when logged out', () => {
    renderWithTheme(<Menu />)

    /* expect(screen.getByText(/faça seu login/i)).toBeInTheDocument() */
    expect(
      screen.getByText(/Crie sua conta com segurança/i)
    ).toBeInTheDocument()

    expect(screen.queryByText(/Acesse sua conta/i)).not.toBeInTheDocument()
    expect(
      screen.queryByText(/Acesse sua lista de desejos/i)
    ).not.toBeInTheDocument()
  })

  it('should render register box when logged in', () => {
    renderWithTheme(<Menu username="Fabio" />)

    expect(screen.getByText(/Acesse sua conta/i)).toBeInTheDocument()
    expect(screen.getByText(/Acesse sua lista de desejos/i)).toBeInTheDocument()

    expect(screen.queryByText(/faça seu login/i)).not.toBeInTheDocument()
    expect(
      screen.queryByText(/Crie sua conta com segurança/i)
    ).not.toBeInTheDocument()
  })
})
