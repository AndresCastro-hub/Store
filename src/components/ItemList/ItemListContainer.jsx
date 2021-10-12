import ItemCount from "../ItemCount"
import {fetch} from "../utils/Mock"
import { useState } from "react"
import { useEffect } from "react"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import { getFirestore } from "../../services/getFirebase"


function ItemListContainer({greeting}) {

    const [productosDeLaApi, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()
    

    useEffect(() => {

        if (idCategoria) {

            const dbQuery = getFirestore()
            dbQuery.collection('items').where('categoria', '==', idCategoria).get()
            .then(resp => {
            setProductos( resp.docs.map(producto => ({id:producto.id, ...producto.data()})))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
            
        }else{

            const dbQuery = getFirestore()
            dbQuery.collection('items').get()
            .then(resp => {
                setProductos( resp.docs.map(producto => ({id:producto.id, ...producto.data()})))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }

    }, [idCategoria])

    return(
        
        <div style={{margin:"10px 10px", display:"flex", flexWrap:"wrap" , gap:"30px"}}>
        
        { loading ? <h2>Cargando...</h2> : <ItemList productosDeLaApi = {productosDeLaApi}/> }

        </div>
    )    
    
}

export default ItemListContainer
