import styled from '@emotion/styled'

import theme from '../../../theme'

const BlockNewComer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 4px;
  border: 1px solid ${theme.colors.separator};
  transition: box-shadow 300ms ease-in 0s;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(213, 218, 227, 0.65) 0px 10px 30px 0px;
  }
`

const BlockDesc = styled('div')`
  padding: 2rem;
`

export { BlockNewComer, BlockDesc }
