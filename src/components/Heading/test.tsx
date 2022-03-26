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

  it('should render a reverse heading color', () => {
    renderWithTheme(
      <Heading reverseColor>Ecommerce Demo In NextJS React</Heading>
    )
    expect(
      screen.getByRole('heading', { name: /Ecommerce Demo In NextJS React/i })
    ).toHaveStyle({
      color: '#CECECE'
    })
  })

  it('should render border-left heading', () => {
    renderWithTheme(<Heading lineLeft>Ecommerce Demo In NextJS React</Heading>)
    expect(
      screen.getByRole('heading', { name: /Ecommerce Demo In NextJS React/i })
    ).toHaveStyle({
      'border-left': '0.7rem solid #460099'
    })
  })

  it('should render border-bottom heading', () => {
    renderWithTheme(
      <Heading lineBottom>Ecommerce Demo In NextJS React</Heading>
    )
    expect(
      screen.getByRole('heading', { name: /Ecommerce Demo In NextJS React/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #460099', {
      modifier: '::after'
    })
  })

  it('should render a heading  with a small size', () => {
    renderWithTheme(
      <Heading size="small">Ecommerce Demo In NextJS React</Heading>
    )
    expect(
      screen.getByRole('heading', { name: /Ecommerce Demo In NextJS React/i })
    ).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(
      screen.getByRole('heading', { name: /Ecommerce Demo In NextJS React/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })
})
