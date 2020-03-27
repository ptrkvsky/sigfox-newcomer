import PropTypes from 'prop-types'
import React from 'react'
import { BlockNewComers } from '../../../styles/components/pages/home/listnewcomers'
import NewcommersDetail from './NewcomersDetail'

const NewcomersList = ({ newCommers }) => (
  <BlockNewComers>
    {newCommers.map(newCommer => (
      <NewcommersDetail key={newCommer.node.first_name} newCommer={newCommer} />
    ))}
  </BlockNewComers>
)

NewcomersList.propTypes = {
  newCommers: PropTypes.array.isRequired,
}

export default NewcomersList
