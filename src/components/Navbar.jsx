import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Nav = () => {

    return (
<div>
<Navbar bg="dark" variant="dark">
    <Container className="justify-content-start">
        <Navbar.Brand href="#home">Happy Cake</Navbar.Brand>
        <Link to="/" className='text-white ms-3 text-decoration-none'>🏠 Home</Link>
        <Link to="/contacto" className='text-white ms-3 text-decoration-none'>📖 Contacto</Link>
        
    </Container>

</Navbar>

</div>

    )

}
export default Nav;