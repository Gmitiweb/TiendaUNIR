import { Navbar, Nav, Container,NavDropdown,Form,Button  } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import { CartIcon } from '../components/icon'
const NavBarExample = () => {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  
    const navStyles = {
      color: "#fff",
      listStyle: "none",
      textDecoration: "none",
     
    };
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >Tienda-UNIR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/hombre">Hombre</Nav.Link>
                <Nav.Link as={Link} to="/mujer">Mujer</Nav.Link>     
                <Nav.Link as={Link} to="/electronica">Electronica</Nav.Link>      
                
               
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/hombre">Hombres</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mujer">Mujeres</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/electronica">Electronica</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
         
                <Nav.Link  as={Link} to="/login">Login</Nav.Link>             
                <Nav.Link as={Link} to={"/cart"} style={navStyles}>
                <li >
                <span className="cart-count">
                <CartIcon />
                {quantity}</span>
                </li>
                </Nav.Link>
            
            
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample