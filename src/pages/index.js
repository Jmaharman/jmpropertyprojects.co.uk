import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="JM Property Projects" />
    <h1>JM Property Projects</h1>
    <p>
      JM Property Projects is a well established building company
      providing a bespoke and general building service throughout
      Sussex and the surrounding area. With over 20 years
      experience in the construction industry, we pride ourselves
      on understanding and delivering our clients needs.
      Call us today for a free estimate and advice.
    </p>
    
    <ul>
      <li>James. 07545989952</li>
      <li>Michael. 07969747505</li>
      <li><a href="mailto:info@jmpropertyprojects.co.uk">info@jmpropertyprojects.co.uk</a></li>
    </ul>
  </Layout>
)

export default IndexPage
