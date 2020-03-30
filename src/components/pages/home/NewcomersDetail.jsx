/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import theme from '../../../styles/theme'

import {
  BlockNewComer,
  BlockDesc,
} from '../../../styles/components/pages/home/newcomersDetail'

const NewcommersDetail = ({ newCommer }) => {
  const { first_name, last_name, profil } = newCommer.node
  return (
    <BlockNewComer>
      <AniLink
        style={{ overflow: 'hidden' }}
        cover={theme.colors.lilac}
        to={`newcomer/${newCommer.node._meta.uid}`}
      >
        <img
          style={{ filter: 'blur(8px)' }}
          src={profil.url}
          alt={last_name + first_name}
        />
      </AniLink>
      <BlockDesc>
        <h2>
          {first_name} {last_name}
        </h2>
      </BlockDesc>
    </BlockNewComer>
  )
}

NewcommersDetail.propTypes = {
  newCommer: PropTypes.object.isRequired,
}

export default NewcommersDetail
