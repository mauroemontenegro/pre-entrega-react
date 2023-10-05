import React from "react"
import styles from './list.module.css'
const ItemListContainer = ({ greting }) => {
    return (
        <>
            <div className={styles.saludo}>
                <h2>{greting}</h2>
            </div>
        </>
    )
}
export default ItemListContainer