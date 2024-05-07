import React from 'react'
import { Header } from '../components/header/Header'
import { Navbar } from '../components/nav/Navbar'
import { Footer } from '../components/footer/Footer'
import { Product } from '../components/products/Product'
import { Cart } from '../components/cart/Cart'

export const Products = () => {
  
  return (
    <>
    <Cart></Cart>
    <Navbar></Navbar>
    <Header></Header>
    <Product></Product>
    <Footer></Footer>
    </>
  )
}
