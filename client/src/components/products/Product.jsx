import { useContext, useEffect, useState } from 'react'
import styles from './product.module.scss'
import { CartContext } from '../context/CartContext';

export const Product = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8081/products/getAll')
                if (!response.ok) {
                    throw new Error('Failed to get')
                }
                const data = await response.json();
                setProducts(data)
                console.log(data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        }
        fetchProducts();
        
    }, []);

  return (
    <>
    <div className={styles.productWrapper}>
        <div className={styles.productGrid}>
            {products.map(product => (
                <div className={styles.product}>
                <h3 key={product.id}>{product.name}</h3>
                <img src={product.image} alt="thumbnails" />
                <p>{product.description}</p>
                <li>Price: {product.price},00 kr.</li>
                <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}
