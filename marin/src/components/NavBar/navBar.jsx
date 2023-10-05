import React from "react"
import styles from './navBar.module.css'
import Car from "../CardWidget/cartWidget.jsx"
const NavBar = () => {
    return (
        <>
            <nav>
                <div className={styles.logo}>
                    <img src="" alt="" />
                    <h3>MARIN</h3>
                    <div className={styles.navegacion}>
                        <ul>
                            <li><a href="">INICO</a></li>
                            <li><a href="">PRODUCTOS</a></li>
                            <li><a href="">CONTACTO</a></li>
                        </ul>
                    </div>
                </div>
                <Car />
            </nav>
        </>
    )
}

export default NavBar