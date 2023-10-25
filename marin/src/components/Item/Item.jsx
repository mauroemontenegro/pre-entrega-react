import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styles from './item.css'
import { useParams } from "react-router-dom";



const Item = () => {
    const [data, setData] = useState([]);
    const {nombreCategoria} = useParams()

    useEffect(() => {
        const url = nombreCategoria ? `https://fakestoreapi.com/products/category/${nombreCategoria}` : 'https://fakestoreapi.com/products?limit=8'
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(error => console.log(error))
    }, [nombreCategoria])

    return data.map((products , index)=>{
        return(
            <div className="productos" key={index}>
                <img src={products.image} alt="" />
                <div className="producto-detalle">
                <h3 className="productos-titulo">{products.title}</h3>
                <p className="productos-precio">${products.price}</p>
               <Link to={`/item/${products.id}`}><button className="productos-agregar">VER MÁS</button></Link>
                </div>
            </div>
        )
    })

}
export default Item