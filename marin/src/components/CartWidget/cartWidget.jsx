import React from "react"
import styles from './style.module.css'
import { Avatar, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';

const Car = () => {
    return (
        <>
            <div className={styles.button}>
                <Badge count={7}>

                    <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
                </Badge>
            </div>
        </>
    )
}
export default Car