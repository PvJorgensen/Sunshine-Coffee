import styles from './landing.module.scss'
import { CookieBanner } from '../components/cookie banner/CookieBanner'
import { Navbar } from '../components/nav/Navbar'
import { Desc } from '../components/desc/Desc'
import { Header } from '../components/header/Header'
import { Shopdirector } from '../components/shopdirector/Shopdirector'
import { Testimonies } from '../components/testimonies/Testimonies'
import { Footer } from '../components/footer/Footer'
import { Cart } from '../components/cart/Cart'
export const Landing = () => {
  return (
    <div>
        <CookieBanner></CookieBanner>
        <Cart />
        <Navbar></Navbar>
        <Header></Header>
        <Desc></Desc>
        <Shopdirector></Shopdirector>
        <Testimonies></Testimonies>
        <Footer></Footer>
    </div>
  )
}
