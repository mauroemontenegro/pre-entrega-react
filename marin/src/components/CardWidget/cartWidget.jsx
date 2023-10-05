import React from "react"
import styles from './style.module.css'
import { Avatar, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';

const Car = () => {
    return (
        <>
            <div className={styles.button}>
                <Badge count={5}>

                    <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
                </Badge>
                {/* <div id="verCarrito" class="carrito">
                <button>🛒</button>
            </div> */}
            </div>
        </>
    )
}
export default Car