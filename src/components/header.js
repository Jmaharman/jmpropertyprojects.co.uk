import React from "react"
import Image from "./image"

const Header = () => (
  <header
    style={{
      background: `#7f7f7f`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <Image />
    </div>
  </header>
)

export default Header
