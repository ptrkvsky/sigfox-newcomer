import styled from '@emotion/styled'
import theme from '../../theme'

const GridNewcomer = styled('section')`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr 1fr;

  padding-top: 60px;
`

const TitleNewcomer = styled('h1')`
  display: block;
  font-size: 35px;
  font-family: ${theme.colors.lilac};
  color: ${theme.colors.lilac};
`

const DescNewcomer = styled('p')`
  padding-top: 40px;
  line-height: 1.5;
  text-align: justify;
`

export { GridNewcomer, TitleNewcomer, DescNewcomer }
