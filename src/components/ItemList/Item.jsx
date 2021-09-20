import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

const  Item = ({productosDeLaApi})  => {
    return (
        <Card style={{ width: '18rem' , border:'1px solid'}} key = {productosDeLaApi.id}>
        <Card.Img variant="top" src={productosDeLaApi.fotoUrl}/>
        <Card.Body style={{textAlign:"center"}}>
            <Card.Title> {productosDeLaApi.titulo}</Card.Title>
        <Card.Text>
            {productosDeLaApi.descripcion}
            <Card.Title style={{marginTop:'10px'}}> {productosDeLaApi.precio}</Card.Title>
        </Card.Text>
        <Card.Text>
            <Button style={{backgroundColor:'black', border:'none'}}>Agregar al carrito</Button>
        </Card.Text>
            
        <Link to = {`/item/${productosDeLaApi.id}`}>
            <Button style={{backgroundColor:'blue'}}>Detalles</Button>
        </Link>

        </Card.Body>
        </Card>
    )
}

export default Item
