import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import style from './detail.css'
import Categories from "../Categorias/Categories";
// import styles from './products.css'

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const { itemId } = useParams()

    useEffect(() => {
        const url = itemId ? `https://fakestoreapi.com/products/${itemId}` : 'https://fakestoreapi.com/products?limit=8';
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(error => console.log(error))
    }, [itemId])
    return (
        <>
            <h2 className="dt-pd">DETALLES DE PRODUCTO</h2>
            <div className="content">
                <div className="img-detalle">
                    <img src={data.image} alt="" />
                </div>
                <div className="detalle">
                    <h3>{data.title}</h3>
                    <ul>
                        <li><p><span>Descripcion:</span> {data.description}</p></li>
                        <li><p> <span>Categoria:</span> {data.category}</p></li>
                        <li><p className="productos-precio"><span>Precio:</span>${data.price}</p></li>
                    </ul>
                    <button className="boton-cart">AGREGAR AL CARRITO</button>
                </div>
            </div>
        </>
    )
}
export default ItemDetailContainer
