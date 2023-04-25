import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="mr-24 ml-24 pr-4 pl-4">{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
