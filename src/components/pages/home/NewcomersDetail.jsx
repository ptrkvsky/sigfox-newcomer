/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import React from 'react'

const NewcommersDetail = ({ newCommer }) => {
  const { first_name, last_name, profil } = newCommer.node
  return (
    <div>
      <h2>
        {first_name} {last_name}
      </h2>
      <img src={profil.url} alt={last_name + first_name} />
    </div>
  )
}

NewcommersDetail.propTypes = {
  newCommer: PropTypes.object.isRequired,
}

export default NewcommersDetail
