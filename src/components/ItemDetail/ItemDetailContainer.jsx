import {useState, useEffect} from 'react'
import {fetch} from '../utils/Mock'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const {id} = useParams()

    useEffect(() => {
        
        fetch
        .then ((res) => {
            if(id){
                const itemFiltrado = res.filter ((item) => item.id === parseInt(id))
                
                setItem(itemFiltrado)
            }else{
                setItem(res)
            } 
        })
        .catch(error => console.log(error))

    }, [id])

    return (
        <> 
        {
            item && <ItemDetail key = {item[0].id} item={item[0]}/>
        }
            
        </>
    )
}

export default ItemDetailContainer