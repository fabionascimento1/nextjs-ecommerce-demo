import * as S from './styles'
import Link from 'next/link'

const Logo = () => (
  <>
    <Link href="/">
      <a title="Ecommerce Practice React">
        <S.LogoWrapper
          src="/img/react-logo.svg"
          alt="Ecommerce Practice React"
        />
      </a>
    </Link>
  </>
)

export default Logo
