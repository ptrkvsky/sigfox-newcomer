/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import {
  GridNewcomer,
  TitleNewcomer,
  DescNewcomer,
} from '../styles/components/templates/newcomer'

import SEO from '../components/seo'

const Newcomer = ({ data }) => {
  const { first_name, last_name, profil } = data.prismic.newco

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <GridNewcomer className="max-container">
        <div>
          <TitleNewcomer>
            {first_name} {last_name}
          </TitleNewcomer>
          <DescNewcomer>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain.
          </DescNewcomer>
        </div>
        <div>
          <img src={profil.url} alt={profil.alt} />
        </div>
      </GridNewcomer>
      <div className="max-container">
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
