import React from 'react'
import { useCartContext } from '../../context/cartContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Cart = () => {

    const {cartList,removeItem,clearCart} = useCartContext()

    return(
        
        <>

        {cartList.map(item => 

        <Card key={item.id} style={{width: '18rem', margin:'30px 50px'}}>
            <Card.Body>
                
                <Card.Title>{item.item.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 ">{item.item.descripcion}</Card.Subtitle>
                    <Card.Subtitle style={{marginTop:'10px', color:'blue'}} className="mb-2 "> Cantidad : {item.cantidad}</Card.Subtitle>
                   
                <Card.Text>
                    <Card.Img variant="top" src={item.item.fotoUrl}/> 
                </Card.Text>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'center'}}>
                    <Button variant="danger"  onClick={() => removeItem(item)}>Eliminar producto</Button> 
                </div>
                 
            </Card.Body>
        </Card>
        )}

        <div style= {{display:'flex', alignItems:'center' , justifyContent:'center' , marginBottom:'10px'}} >
            <Button variant="primary"  onClick={() => clearCart(cartList)}>Vaciar Carrito</Button>
        </div>

        </>
    )
}

export default Cart
