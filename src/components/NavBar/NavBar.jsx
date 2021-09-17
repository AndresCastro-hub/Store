import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CartWidget from '../CartWidget'
import css from './nav.css'

function NavBar() {
    return (
        <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img style={{width:'100px'}} src="https://i.pinimg.com/736x/c6/30/47/c630470cb3ec52076a4fefda1c232d6f.jpg"  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link style = {{color:'white'}}href="#home">Home</Nav.Link>
        <NavDropdown  title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item style={{color:'white'}}   href="#action/3.1">Remeras</NavDropdown.Item>
        <NavDropdown.Item style={{color:'white'}} href="#action/3.2">Zapatillas</NavDropdown.Item>
        <NavDropdown.Item style={{color:'white'}} href="#action/3.3">Pantalones</NavDropdown.Item>
        <NavDropdown.Item style={{color:'white'}} href="#action/3.4">Accesorios</NavDropdown.Item>
      </NavDropdown >
    </Nav>
    <CartWidget/>
  </Navbar.Collapse>
</Navbar>
</>
    )
}

export default NavBar
