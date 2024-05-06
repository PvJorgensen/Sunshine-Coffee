import React, { useState } from 'react'
import style from './cart.module.scss'


export const Cart = () => {
    const [isOpen, setIsOpen ] = useState(false)
    
  return (
    <>    
    <button onClick={ () => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>
    {isOpen && <div className={style.cart}>
        <p>This is my content</p>
    </div>}
    </>

  )
}
