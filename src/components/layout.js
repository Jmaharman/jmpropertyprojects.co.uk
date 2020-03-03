/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div style={{
      maxWidth: 900,
      margin: '0 auto' }}>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          background: 'white',
          padding: `20px 30px`,
          boxShadow: 'inset 0 8px 6px -10px black',
          borderRadius: '0 0 10px 10px'
        }}
      >
        <main>{children}</main>
        <footer style={{ fontSize: 12 }}>
          © {new Date().getFullYear()}, JM Property Projects Ltd
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
