import React from "react"
import styles from './list.module.css'
import Item from "../Item/Item"
// import Categories from "../Categorias/Categories"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import Categories from "../Categorias/Categories";

const ItemListContainer = ({ greting }) => {

    return (
        <>
            <h3 className="titulo-prod">PRODUCTOS DESTACADOS</h3>
            <div className="categorias">
                <h3>CATEGORIAS:</h3>
            <Categories />
            </div>
            <div className="contenedor">
                <Item />
            </div>
        </>
    )
}
export default ItemListContainer