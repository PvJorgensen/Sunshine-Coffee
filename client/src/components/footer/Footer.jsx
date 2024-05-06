import React from 'react'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
        <div>
            <h5>Contact</h5>
            <p>SuperCoffee Road 223b</p>
            <p>92230 New Coffeeland</p>
            <p>Phone: 22331122</p>
            <p>Mail: Coffeeland@info.com</p>
        </div>
        <div>
            <h5>Legal</h5>
            <p>Cookie Policy</p>
            <p>Return policy</p>
            <p>Shipping</p>
            <p>Term and Conditions</p>
        </div>
        <div>
            <h5>About</h5>
            <p>History</p>
            <p>THe people behind</p>
            <p>Partnerships</p>
            <p>International</p>
        </div>
    </div>
  )
}
