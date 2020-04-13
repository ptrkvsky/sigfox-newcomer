import PropTypes from 'prop-types'
import React, { useReducer } from 'react'

const initialState = []
const init = {}
const reducer = (state, action) => {
  switch (action.type) {
    case 'test':
      break

    default:
      break
  }
}

const [state, dispatch] = useReducer(reducer, initialState, init)

const GlobalContextProvider = ({ children }) => {
  console.log(test)
  return <div>{children}</div>
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalContextProvider
