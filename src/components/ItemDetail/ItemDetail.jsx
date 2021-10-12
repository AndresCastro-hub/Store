import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from'react-bootstrap/Row'
import ItemCount from '../ItemCount'
import {useState, useContext} from 'react'
import { ContextApp } from '../../App'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../context/cartContext'



const ItemDetail = ({item}) => {

    const [cantidadSeleccionada, setCantidadSeleccionada ] = useState(0)
    const [ocultarItemCount, setOcultarItemCount] = useState(true)

    const {addToCart} = useCartContext()
    
    const {state} = useContext(ContextApp)

    const onAdd = (cantidad) => {
        
        addToCart(item , cantidad)

        setOcultarItemCount(false)
    }

    return (
        
        <div style = {{marginTop:'30px', display:'flex', alignItems:'center' , justifyContent:'center'}}>
            <Card style={{width:'40%'}} key = {item.id}>
        <Card.Img variant="top" src={item.fotoUrl}/>
        <Card.Body style={{textAlign:"center"}}>
            <Card.Title > {item.titulo}</Card.Title>
        <Card.Text>
            {item.descripcion}
            <Card.Title style={{marginTop:'10px'}}> $ {item.precio}</Card.Title>
        </Card.Text>
            
        <Row className = "justify-content-md-center">

        {
            ocultarItemCount ?
                <ItemCount stock ={5} initial ={1} onAdd ={onAdd} />
            :
            <>
                 <Link to = '/cart'>
                    <Button variant="primary" style ={{marginTop:'20px'}}>Finalizar pedido</Button>
                </Link>

                <Link to = '/'>
                    <Button variant="dark" style ={{marginTop:'20px', marginLeft:'15px'}}>Seguir Comprando</Button>
                </Link>
            </>
        }
         </Row>

        </Card.Body>

        </Card> 

        </div>

        
        
    )
}

export default ItemDetail
