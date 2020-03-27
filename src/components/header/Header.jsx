import React from 'react'
import { BlockHeader } from '../../styles/components/header/header'
import { BlockLogo } from '../../styles/components/header/logoMain'
import logoMain from '../../images/logo-main.svg'

const Header = () => (
  <>
    <BlockHeader>
      <BlockLogo>
        <span className="brand">Sigfox</span>
        <span className="tag-line">Newcomer</span>
      </BlockLogo>
    </BlockHeader>
  </>
)

export default Header
