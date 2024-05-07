import React, { useContext } from 'react'
import styles from './navbar.module.scss'
import { Cart } from '../cart/Cart'
import { CartContext } from '../context/CartContext'

export const Navbar = () => {
  const handleClick = () => {
    window.location.href = '/'
  }

  const { toggleCart } = useContext(CartContext)

  return (
    <nav className={styles.Navbar}>
      <div className={styles.etellerandet}>
      <h2 onClick={handleClick}>Sunshine Coffee</h2>
      </div>
      <ul>
        <button className={styles.cartBtn} onClick={() => toggleCart()}>Cart</button>
        <li>Profile</li>
      </ul>
    </nav>
  )
}
