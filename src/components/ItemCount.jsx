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
            
            <Row className = "justify-content-md-center">
                <h2 style={{marginTop:'10px'}}>Productos</h2>
            </Row>
            
            <Row className = "justify-content-md-center">

                <Button size='sm' style ={{marginRight:'10px',backgroundColor:'black' , borderStyle: 'none'}} onClick ={sumar}>+</Button>{' '}
                
                <label style ={{color:'black'}} size ="lg">{count}</label> <br />

                <Button size='sm' style ={{marginLeft:'10px', backgroundColor:'black' , borderStyle: 'none'}} onClick ={restar} > - </Button> {' '} 

            </Row>
            
            <Row className = "justify-content-md-center">
                
                {/* { cambiarBoton ? */}

                <Button  style ={{marginTop:'10px' ,backgroundColor:'black' , borderStyle: 'none'}} onClick ={agregarCarrito}>Agregar al carrito</Button>
                
                
                
                <>
{/*                  
                 <Link to = '/cart'>
                    <Button variant="primary" style ={{marginTop:'20px'}}>Finalizar pedido</Button>
                </Link>

                <Link to = '/'>
                    <Button variant="dark" style ={{marginTop:'20px', marginLeft:'15px'}}>Seguir Comprando</Button>
                </Link> */}

                </>
                 
                

            </Row>
            
        </Container>
        </>
    )
}

export default ItemCount

