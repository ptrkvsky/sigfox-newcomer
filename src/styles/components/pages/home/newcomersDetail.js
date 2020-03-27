import styled from '@emotion/styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import theme from '../../../theme'

const BlockNewComer = styled(AniLink)`
  display: flex;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.separator};
  transition: box-shadow 300ms ease-in 0s;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(213, 218, 227, 0.65) 0px 10px 30px 0px;
  }
`

export { BlockNewComer }