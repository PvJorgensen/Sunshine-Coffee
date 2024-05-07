import React, { useContext, useState } from 'react'
import style from './cart.module.scss'
import { CartContext } from '../context/CartContext'


export const Cart = () => {
    const { isCartOpen, toggleCart, cart, removeFromCart } = useContext(CartContext)
  return (
    <div className={isCartOpen ? style.cartStyle : style.cartStyleClosed}>
        <button className={style.closer} onClick={toggleCart}>x</button>
        <h4 className={style.cartHead}>Shopping Cart</h4>
        {cart.map((item) => {
            return (
            <>
            <div className={style.productCart}>
            <p>{item.name} x {item.quantity}</p>
            <p>{item.price * item.quantity},00</p>
            <button className={style.remover} onClick={() => removeFromCart(item)}>x</button>
            </div>
            </>
            )
        })}
        </div>
  )
}

