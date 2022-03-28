import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  mostPopularHighLight: highLightMock,
  newGames: gamesMock,
  mostPopularGames: gamesMock
}

describe('<Home />', () => {
  it('should render the Home', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/abrir o menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /novidades/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Mais Populares/i })
    ).toBeInTheDocument()
  })
})
