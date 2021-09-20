import ItemCount from "../ItemCount"
import {fetch} from "../utils/Mock"
import { useState } from "react"
import { useEffect } from "react"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'


function ItemListContainer({greeting}) {

    const [productosDeLaApi, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()
    
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    useEffect(() => {

        if (idCategoria) {
            fetch
            .then (respuesta => {
                setProductos( respuesta.filter(prod => prod.categoria === idCategoria ))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false)) 
        }else{
            fetch
            .then (respuesta => {
                setProductos(respuesta)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false)) 
        }

    }, [idCategoria])

    return(
        
        <div style={{margin:"10px 10px", display:"flex", flexWrap:"wrap" , gap:"30px"}}>
        
        { loading ? <h2>Cargando...</h2> : <ItemList productosDeLaApi = {productosDeLaApi}/> }

        {/* <ItemCount stock ={5} initial ={1} onAdd ={onAdd}/> */}

        </div>
    )    
    
}

export default ItemListContainer
