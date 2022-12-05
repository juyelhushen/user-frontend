import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar bg="primary" variant='dark' expand="lg">
      <Container fluid>
        <Link className='navbar-brand' to="/">Full Stack Application</Link>
        <Link className='btn btn-outline-light' to="/adduser">Add User</Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;