import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
  <p>
    You should <Link to="/">log in</Link> to see restricted content
  </p>
  </Layout>
)

export default IndexPage
