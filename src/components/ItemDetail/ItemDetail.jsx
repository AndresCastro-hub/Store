import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ItemDetail({producto}) {
    return (
        <div style = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Card style={{ width: '50%'}} key = {producto.id}>
        <Card.Img variant="top" src={producto.fotoUrl}/>
        <Card.Body>
            <Card.Title style={{textAlign:"center"}}> {producto.titulo}</Card.Title>
        <Card.Text>
            {producto.descripcion}
            <Card.Title style={{textAlign:"center", marginTop:'10px'}}> {producto.precio}</Card.Title>
        </Card.Text>
            <Button style={{marginLeft:'44%'}} variant="dark">Detalles</Button>
        </Card.Body>
        </Card> 
        </div>
      
    )
}

export default ItemDetail
