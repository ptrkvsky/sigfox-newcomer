import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Welcome from '../components/pages/home/Welcome'
import ListNewComers from '../components/pages/home/NewcomersList'

import Layout from '../components/Layout'

import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="max-container">
      <Welcome />
      <ListNewComers newCommers={data.prismic.allNewcos.edges} />
    </div>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const query = graphql`
  {
    prismic {
      allNewcos {
        edges {
          node {
            first_name
            last_name
            profil
            video_presentation
            _linkType
          }
        }
      }
    }
  }
`
