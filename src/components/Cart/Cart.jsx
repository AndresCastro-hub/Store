import {useState}from 'react'
import { useCartContext } from '../../context/cartContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import { getFirestore } from '../../services/getFirebase'
import Form from 'react-bootstrap/Form'
import firebase from 'firebase'
import 'firebase/firestore'

const Cart = () => {

    const [formData, setFormData] = useState({
        name : '',
        tel: '',
        email:''
    })

    const {cartList,removeItem,clearCart,precioTotal,borrarLista} = useCartContext()

    const handleOnSubmit = (e) => {
        e.preventDefault()

        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());
        
        orden.buyer = formData

        orden.total = precioTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.titulo;
            const price = cartItem.item.precio * cartItem.cantidad;

            return {id,title,price}
        })  

        const db = getFirestore();
        db.collection('orders').add(orden)
        .then(resp =>console.log(resp.id))
        .catch(err => console.log(err))
        .finally(()=>setFormData({
            name: '',
            tel:'',
            email:'',
        }))

         
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.id)
        )
            
        const batch = db.batch();
            
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).cantidad
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })


    }

    function handleOnChange(e){

        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    
    
    return(
        
        <>
        {cartList.length === 0 ? <h2 className= "text-center text-dark">Su carrito esta vacio..</h2>

         :

        cartList.map(item => 

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
        
        {cartList.length === 0 ? 
          
        <div style= {{display:'flex', alignItems:'center' , justifyContent:'center' , marginBottom:'10px'}} >
            
            <Link to = '/'>
                <Button variant="primary mt-2">Volver al inicio</Button>
            </Link>
        </div>

        :
        <>

        <h2 className='ml-5'>Precio Total: {precioTotal()}</h2>

        <Form onSubmit = {handleOnSubmit} onChange={handleOnChange} style={{display:'flex' , flexDirection:'column' , gap:'20px', margin:'30px 50px'}} > 
            <Form.Control type="text" value = {formData.name} name='name' placeholder="Ingrese el nombre"/>
            <Form.Control type="text"  value = {formData.tel} name ='tel' placeholder="Ingrese el numero de telefono"/>
            <Form.Control type="text"  value = {formData.email} name='email' placeholder="Ingrese el email"/>
            <Form.Control type="email" name='email2' placeholder="Confirme el email"/>
            <Button variant="primary" type='submit'>Terminar Compra</Button>      
        </Form>

        <div style= {{display:'flex', alignItems:'center' , justifyContent:'center' , marginBottom:'10px'}} >
            <Button class='mt-2' variant="danger"  onClick={() => clearCart(cartList)}>Vaciar Carrito</Button>
        </div>

        </>
    
        }
         
        </>

    )
    
}


export default Cart
