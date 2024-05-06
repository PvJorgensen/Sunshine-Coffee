import styles from './shop.module.scss'


export const Shopdirector = () => {
    const handleClick = () => {
        window.location.href = '/Products'
    }


  return (
    <div className={styles.shopDirector}>
        <h2>Shop Now</h2>
        <p>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in
        no time at all. And the best part of it? It is totally organic, fair trade and
        sustainably sourced. So get brewing</p>
        <button onClick={handleClick}>Go to products</button>
    </div>
  )
}
