
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Footer from "../layouts/footer"
const Login = () => {
   
    return(
        <div className='login col-4 mx-auto'>
            <h1>Login</h1>
            <div >
            
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Text className="text-muted">
                    Si no estas registrado haz clic 
                    <Nav.Link as={Link} to="/register">Aqui</Nav.Link> 
                    </Form.Text>
                </Form.Group>
            </Form>
            </div>
            <Footer/>
        </div>
    )
}
export default Login

