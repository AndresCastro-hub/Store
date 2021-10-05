import {useState, useEffect} from 'react'
import {fetch} from '../utils/Mock'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../services/getFirebase'

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        
        const dbQuery = getFirestore()
        dbQuery.collection('items').doc(id).get()
        .then(resp => setItem({id:resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        
    }, [id])

  
    return (
        <> 
        {
           item && <ItemDetail  item={item}/>
        }
            
        </>
    )
}

export default ItemDetailContainer