import { Navbar, Nav, Container  } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { CartIcon } from '../components/icon'

const NavBarTienda = () => {
    const [cart, setCart] = useContext(CartContext);
    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  
    const navStyles = {
      color: "#fff",
      listStyle: "none",
      textDecoration: "none",
    };
  //he usado esta navbar que vi en youtube la descargue y la modifique a mi gusto
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
                    <Nav.Link  as={Link} to="/pedidos">Pedidos</Nav.Link>   
                    <div className="loginNav d-flex">
                        <Nav.Link  as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to={"/cart"} style={navStyles}>
                             <li ><span className="cart-count">
                              <CartIcon />{quantity} </span></li>
                        </Nav.Link>
                    </div>
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
export default NavBarTienda