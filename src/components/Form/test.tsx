import { renderWithTheme } from 'utils/tests/helpers'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.4rem;
        color: #16193A;
        text-align: center;
      }

      .c0 a {
        color: #6dfdfc;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #4000f3;
        color: #4000f3;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c0 a:hover {
        color: #3300c0;
        border-bottom: 0.1rem solid #3300c0;
      }

      <body>
        <div>
          <div
            class=""
          >
            <div
              class="c0"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
