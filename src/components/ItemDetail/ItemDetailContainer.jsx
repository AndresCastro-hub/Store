import {useState, useEffect} from 'react'
import { fetch} from '../utils/Mock'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()
    const {id} = useParams()

    useEffect(() => {
        
        fetch
        .then(respuesta => {
            setProducto(respuesta.find(prod => prod.id === id))
        }) 
        .catch(error => console.log(error))

    }, [id])

    return (
        <>
            <ItemDetail producto = {producto}/>
        </>
    )
}

export default ItemDetailContainer