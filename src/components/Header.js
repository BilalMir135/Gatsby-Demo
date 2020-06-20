import React from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/" className={styles.title}>
          Bilal Mir
        </Link>
      </h1>
      <nav>
        <ul className={styles.nav_list}>
          <li>
            <Link
              to="/"
              className={styles.nav_item}
              activeClassName={styles.active_nav_item}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={styles.nav_item}
              activeClassName={styles.active_nav_item}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={styles.nav_item}
              activeClassName={styles.active_nav_item}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={styles.nav_item}
              activeClassName={styles.active_nav_item}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
