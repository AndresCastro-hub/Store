import {useState, useEffect} from 'react'
import { fetchUno } from '../utils/Mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        
        fetchUno
        .then(resp => setProducto(resp))

    }, [])

    return (
        <>
            <ItemDetail producto = {producto}/>
        </>
    )
}

export default ItemDetailContainer