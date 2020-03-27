import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="max-container">
      <h1>Hi people</h1>
      <p>Welcome to the new comers.</p>
    </div>
  </Layout>
)

export default IndexPage
