import styled from '@emotion/styled'
import theme from '../../../theme'
import team from '../../../../images/team.svg'

const BlockWelcome = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 380px;
  .col-illu {
    background-image: url(${team});
    background-size: contain;
    background-repeat: no-repeat;
  }
  .col-pres {
    display: flex;
    flex-direction: column;
    align-items;
    justify-content: center;

    .title{
        text-align: center;
        color: ${theme.colors.primary};
        font-family: ${theme.fonts.title};
        font-size: 35px;
        font-weight: 300;
    }

    .tagline{
        text-align: center;
        margin-top: 7px;
        font-family: ${theme.fonts.title};
        font-size: 29px;
        font-weight: 300;     
    }

    .description{
      margin-top: 20px;
      text-align: center;
    }
    
  }
`

export { BlockWelcome }
