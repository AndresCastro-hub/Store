import {useState} from 'react'
import  Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from'react-bootstrap/Row'
import { Link } from 'react-router-dom'

const ItemCount = ({stock , initial , onAdd}) => {

    const [count, setCount] = useState(initial)
    // const [cambiarBoton , setCambiarBoton] = useState(true)

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
        // setCambiarBoton(false)
    }

   
    return (
        <>
        <Container>
            
            <Row className = "justify-content-center">
                <h2 style={{margin:'0 auto'}}>Productos</h2>
            </Row>
            
            <Row className = "justify-content-center">

                <Button size='sm' style ={{marginTop: '10px' , marginRight:'10px',backgroundColor:'black' , borderStyle: 'none'}} onClick ={sumar}>+</Button>{' '}
                
                <label style ={{marginTop: '10px', marginLeft:'5px', color:'black'}} size ="lg">{count}</label> <br />

                <Button size='sm' style ={{marginTop: '10px',marginLeft:'10px', backgroundColor:'black' , borderStyle: 'none'}} onClick ={restar} > - </Button> {' '} 

            </Row>
            
            <Row className = "justify-content-center">
            
                <Button  style ={{margin:'10px auto' ,backgroundColor:'black' , borderStyle: 'none'}} onClick ={agregarCarrito}>Agregar al carrito</Button>
          
            <>
            </>   
            </Row>

        </Container>
        </>
    )
}

export default ItemCount

