import React from 'react'
import { useCartContext } from '../../context/cartContext'
import Card from 'react-bootstrap/Card'

const Cart = () => {

    const {cartList} = useCartContext()

    return(
       <>
       <h2 style = {{textAlign:'center'}}>Los productos que usted tiene en su carrito son :</h2>
        
        {cartList.map(item =>
        <Card style={{ width: '16rem' , margin:'30px 50px'}}>
            <Card.Body>
                
                <Card.Title>{item.item.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.item.descripcion}</Card.Subtitle>
                <Card.Text>
                    <Card.Img variant="top" src={item.item.fotoUrl}/>
                </Card.Text>
   
            </Card.Body>
        </Card>
             )}
        </>
    )
}

export default Cart
