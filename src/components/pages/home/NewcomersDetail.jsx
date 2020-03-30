/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import React from 'react'

import {
  BlockNewComer,
  BlockDesc,
} from '../../../styles/components/pages/home/newcomersDetail'

const NewcommersDetail = ({ newCommer }) => {
  const { first_name, last_name, profil } = newCommer.node
  return (
    <BlockNewComer fade to={`newcomer/${newCommer.node._meta.uid}`}>
      <img src={profil.url} alt={last_name + first_name} />
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
