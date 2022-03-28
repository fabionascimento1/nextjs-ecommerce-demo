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
  newGames: [gamesMock[0]],
  mostPopularGames: [gamesMock[0]]
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
  it('should render section elements', () => {
    renderWithTheme(<Home {...props} />)
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 4 cards cada = 5x4 = 20)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(2)
    // card game ( 5 sections com 1 card cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(2)
    // highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(2)
  })
})
