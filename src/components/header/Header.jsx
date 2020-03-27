import React from 'react'
import { BlockHeader } from '../../styles/components/header/header'
import { BlockLogo } from '../../styles/components/header/logoMain'
import theme from '../../styles/theme'

const Header = () => (
  <>
    <BlockHeader>
      <div className="max-container">
        <BlockLogo paintDrip to="/" hex={theme.colors.lilac}>
          <span className="brand">Sigfox</span>
          <span className="tag-line">Newcomer</span>
        </BlockLogo>
      </div>
    </BlockHeader>
  </>
)

export default Header
