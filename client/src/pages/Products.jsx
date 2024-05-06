import React from 'react'
import { Header } from '../components/header/Header'
import { Navbar } from '../components/nav/Navbar'
import { Footer } from '../components/footer/Footer'
import { Product } from '../components/products/Product'

export const Products = () => {
  
  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    <Product></Product>
    <Footer></Footer>
    </>
  )
}
