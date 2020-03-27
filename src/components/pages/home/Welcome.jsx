import React from 'react'
import { BlockWelcome } from '../../../styles/components/pages/home/welcome'

const Welcome = () => (
  <BlockWelcome>
    <div className="col-illu"></div>
    <div className="col-pres">
      <h1 className="title">Welcome newcomers.</h1>
      <p className="tagline">Here they are.</p>
      <p className="description">Discover your future team mates.</p>
    </div>
  </BlockWelcome>
)

export default Welcome
