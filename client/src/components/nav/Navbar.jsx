import React from 'react'
import styles from './navbar.module.scss'
import { Cart } from '../cart/Cart'

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div>
      <h2>Sunshine Coffee</h2>
      </div>
      <ul>
        <Cart />
        <li>Profile</li>
      </ul>
    </nav>
  )
}
