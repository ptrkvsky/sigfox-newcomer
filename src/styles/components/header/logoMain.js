import styled from '@emotion/styled'
import logoMain from '../../../images/logo-main.svg'
import theme from '../../theme'

const BlockLogo = styled('div')`
  background-image: url(${logoMain});
  background-repeat: no-repeat;
  padding-left: 52px;
  .brand {
    display: block;
    font-family: ${theme.fonts.title};
    color: ${theme.colors.primary};
    font-size: 15px;
    line-height: 16px;
    font-weight: 700;
  }
  .tag-line {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 300;
  }
`

export { BlockLogo }
