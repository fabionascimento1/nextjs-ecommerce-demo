import Heading from 'components/Heading'

import * as S from './styles'
import { TextContentProps } from './types'

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper data-cy="content">
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
