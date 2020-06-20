import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Myself Bilal Mir</p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default AboutPage
