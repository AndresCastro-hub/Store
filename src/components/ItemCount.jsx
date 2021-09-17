import {useState} from 'react'
import  Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from'react-bootstrap/Row'

const ItemCount = ({stock , initial , onAdd}) => {

    const [count, setCount] = useState(initial)

    function sumar() {
        if(count < stock){
            setCount( count + 1)
        }
        
    }
        
    function restar() {
        if (count > 1){
            setCount (count - 1)
        }

    }

    const agregarCarrito = () => {
        onAdd(count)
    }

   
    return (
        <>
        <Container>
            
            <Row className = "justify-content-md-center">
            <h2 >Productos</h2>
            </Row>
            
            <Row className = "justify-content-md-center">
            <label variant = "danger" size ="lg">{count}</label> <br />
            </Row>
            
            <Row className = "justify-content-md-center">
            <Button variant="dark" onClick ={sumar}>+</Button>{' '}
            <Button variant="dark" onClick ={agregarCarrito}>Agregar al carrito</Button>{' '}
            <Button variant="dark" onClick ={restar}>-</Button>{' '}
            </Row>
            
        </Container>
        </>
    )
}

export default ItemCount

   // <div>
        //     <h2>Soy Item Count</h2>
        //     <label>{count}</label> <br />
        //     <button onClick = {sumar}>+</button>
        //     <button onClick = {agregarCarrito}>Agregar al carrito</button>
        //     <button onClick = {restar}>-</button>
        // </div>