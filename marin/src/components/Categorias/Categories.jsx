import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import style from './categorias.css'



const Categories = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setData(json))
            .catch(error => console.log(error))
    }, [])
    return(
        <>
        {data.map((categoryId, index)=> <NavLink to={`/category/${categoryId}`} key={index}><button className="btn-cat">{categoryId}</button></NavLink>)}
        </>
    )
        

}
export default Categories








// import { useEffect, useState } from "react"
// import { Link, useParams } from "react-router-dom";
// import styles from './products.css'

// const Categories = () => {
//     const [data, setData] = useState([]);
//     const { nombreCategoria } = useParams()

//     useEffect(() => {
//         const url = nombreCategoria ? `https://fakestoreapi.com/products/category/${nombreCategoria}` : 'https://fakestoreapi.com/products?limit=8'
//         fetch(url)
//             .then(res => res.json())
//             .then(json => setData(json))
//             .catch(error => console.log(error))
//     }, [])

//     return (
//         <div className="productos">
//             <img src={products.image} alt="" />
//             <div className="producto-detalle">
//                 <h3 className="productos-titulo">{products.title}</h3>
//                 <p className="productos-precio">{products.price}</p>
//                 <Link to={`/item/${products.id}`}><button className="productos-agregar">VER MÁS</button></Link>
//             </div>
//         </div>
//     )
// }
// export default Categories