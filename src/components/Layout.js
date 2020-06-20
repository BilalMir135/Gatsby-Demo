import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/index.scss"
import styles from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
