import ItemCount from "../ItemCount"
import {fetch} from "../utils/Mock"
import { useState } from "react"
import { useEffect } from "react"
import ItemList from "./ItemList"


function ItemListContainer({greeting}) {

    const [productosDeLaApi, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    useEffect(() => {
        fetch
        .then (respuesta => {
            setProductos(respuesta)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return(
        
        <div style={{margin:"10px 10px", display:"flex", flexWrap:"wrap" , gap:"30px"}}>
        
        { loading ? <h2>Cargando...</h2> : <ItemList productosDeLaApi = {productosDeLaApi}/> }

        <ItemCount stock ={5} initial ={1} onAdd ={onAdd}/>

        </div>
    )    
    
}

export default ItemListContainer
