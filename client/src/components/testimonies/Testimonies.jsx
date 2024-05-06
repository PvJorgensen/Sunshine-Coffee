import styles from './testi.module.scss'


export const Testimonies = () => {
  return (
    <>
    <div className={styles.testiWrapper}>
    <h2>Testimonies</h2>
    <div className={styles.testiGrid}>
        <div>
            <h3>John</h3>
            <p>"Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great..."</p>
        </div>
        <div>
            <h3>Eva</h3>
            <p>"Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great..."</p>
        </div>
        <div>
            <h3>Peter</h3>
            <p>"Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great..."</p>
        </div>
        <div>
            <h3>Michelle</h3>
            <p>"Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great..."</p>
        </div>
    </div>
    </div>
    </>
  )
}
