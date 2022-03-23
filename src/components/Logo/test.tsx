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

  it('should render a White label when is passed', () => {
    renderWithTheme(<Logo color="white" />)
    expect(
      screen.getByLabelText(/Ecommerce Demo In NextJS React/i).parentElement
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a sizing Normal by default', () => {
    renderWithTheme(<Logo size="normal" />)
    expect(
      screen.getByLabelText(/Ecommerce Demo In NextJS React/i).parentElement
    ).toHaveStyle({
      width: '17rem'
    })
  })

  it('should render a sizing Large is passed', () => {
    renderWithTheme(<Logo size="large" />)
    expect(
      screen.getByLabelText(/Ecommerce Demo In NextJS React/i).parentElement
    ).toHaveStyle({
      width: '27rem'
    })
  })
})
