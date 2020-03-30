/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { GridNewcomer } from '../styles/components/templates/newcomer'

import SEO from '../components/seo'

const Newcomer = ({ data }) => {
  const { first_name, last_name, profil } = data.prismic.newco

  return (
    <Layout>
      <SEO title="Home" />
      <GridNewcomer className="max-container">
        <div>
          <h1>
            Welcome to {first_name} {last_name}
          </h1>
          <iframe
            title={first_name}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3KL0v7Z_-I8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <img src={profil.url} alt={profil.alt} />
      </GridNewcomer>
    </Layout>
  )
}

Newcomer.propTypes = {
  data: PropTypes.object.isRequired,
}
export default Newcomer

export const pageQuery = graphql`
  query NewcomerQuery($uid: String!) {
    prismic {
      newco(uid: $uid, lang: "fr-fr") {
        first_name
        last_name
        profil
        video_presentation
        _linkType
      }
    }
  }
`
