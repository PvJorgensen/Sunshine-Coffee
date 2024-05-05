import React from 'react'
import styles from './navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div>
      <h2>Sunshine Coffee</h2>
      </div>
      <ul>
        <li>Kurv</li>
        <li>Profile</li>
      </ul>
    </nav>
  )
}
