import React from 'react'
import Welcome from '../components/pages/home/Welcome'

import Layout from '../components/Layout'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="max-container">
      <Welcome />
    </div>
  </Layout>
)

export default IndexPage
