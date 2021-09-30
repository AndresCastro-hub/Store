import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CartWidget from '../CartWidget'
import css from './nav.css'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../context/cartContext'

function NavBar() {

  const {iconCart} = useCartContext()

  return (
  <>
    <Navbar expand="lg">
          
      <Link  to = '/'>
        <Navbar.Brand href="#home">
          <img style={{width:'100px'}} src="https://i.pinimg.com/736x/c6/30/47/c630470cb3ec52076a4fefda1c232d6f.jpg"/>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

          <Link  to = '/'>
            <Nav.Link style = {{color:'white'}}href="#home">Inicio</Nav.Link>
          </Link>

        <NavDropdown  title="Categorias" id="basic-nav-dropdown">

        <Link to = '/categoria/remeras'>
          <NavDropdown.Item style={{color:'white'}}   href="#action/3.1">Remeras</NavDropdown.Item>
        </Link>

        <Link to ='/categoria/zapatillas'> 
          <NavDropdown.Item style={{color:'white'}} href="#action/3.2">Zapatillas</NavDropdown.Item>
        </Link>

        <Link to = '/categoria/buzos'>
          <NavDropdown.Item style={{color:'white'}} href="#action/3.3">Buzos</NavDropdown.Item>
        </Link>

        <Link to = '/categoria/botines'>
          <NavDropdown.Item style={{color:'white'}} href="#action/3.4">Botines</NavDropdown.Item>
        </Link>


        </NavDropdown >
        
      </Nav>
    
      <Link  to = '/cart'>
          <CartWidget/>
        </Link>
     

      </Navbar.Collapse>
    </Navbar>

    <h2 className='titulo'>Nike Store</h2>

  </>
  )
}

export default NavBar
