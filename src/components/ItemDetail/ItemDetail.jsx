import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from '../ItemCount'

const onAdd = (cantidad) => {
    console.log(cantidad)
}

function ItemDetail({item}) {
    return (
        <div style = {{marginTop:'30px', display:'flex', alignItems:'center' , justifyContent:'center'}}>
            <Card style={{width:'40%'}} key = {item.id}>
        <Card.Img variant="top" src={item.fotoUrl}/>
        <Card.Body style={{textAlign:"center"}}>
            <Card.Title > {item.titulo}</Card.Title>
        <Card.Text>
            {item.descripcion}
            <Card.Title style={{marginTop:'10px'}}> {item.precio}</Card.Title>
        </Card.Text>
            <Button variant="dark">Detalles</Button>
        </Card.Body>

        <div>
            <ItemCount stock ={5} initial ={1} onAdd ={onAdd} />
        </div>

        </Card> 
        </div>

        
        
    )
}

export default ItemDetail
