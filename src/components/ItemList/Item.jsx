import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const  Item = ({productosDeLaApi})  => {
    return (
        <Card style={{ width: '18rem'}} key = {productosDeLaApi.id}>
        <Card.Img variant="top" src={productosDeLaApi.fotoUrl}/>
        <Card.Body>
            <Card.Title style={{textAlign:"center"}}> {productosDeLaApi.titulo}</Card.Title>
        <Card.Text>
            {productosDeLaApi.descripcion}
            <Card.Title style={{textAlign:"center", marginTop:'10px'}}> {productosDeLaApi.precio}</Card.Title>
        </Card.Text>
            <Button style={{marginLeft:'85px'}} variant="dark">Detalles</Button>
        </Card.Body>
        </Card>
    )
}

export default Item
