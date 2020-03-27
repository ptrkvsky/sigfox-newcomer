/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import SEO from '../components/seo'

const Newcomer = ({ data }) => {
  const {
    first_name,
    last_name,
    profil,
    video_presentation,
  } = data.prismic.newco
  console.log(data.prismic.newco)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="max-container">
        <h1>
          Welcome to {first_name} {last_name}
        </h1>
        <img src={profil.url} alt={profil.alt} />
        <h2>Video de presentation</h2>
        <iframe
          title="ok "
          width="560"
          height="315"
          src={video_presentation.embed_url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
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
