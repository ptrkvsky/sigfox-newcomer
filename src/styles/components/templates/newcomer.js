import styled from '@emotion/styled'
import theme from '../../theme'

const GridNewcomer = styled('section')`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
`

const TitleNewcomer = styled('h1')`
  display: block;
  font-size: 35px;
  font-family: ${theme.colors.lilac};
`

export { GridNewcomer, TitleNewcomer }
