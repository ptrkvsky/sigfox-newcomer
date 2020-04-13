import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Welcome from '../components/pages/home/Welcome'
import ListNewComers from '../components/pages/home/NewcomersList'

import Layout from '../components/Layout'

import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  /*
  useEffect(() => {
    window.localStorage.setItem('name', 'Obaseki Nosa')
    console.log(window.localStorage.getItem('name'))
  }, [])
  */

  <Layout>
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
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`
