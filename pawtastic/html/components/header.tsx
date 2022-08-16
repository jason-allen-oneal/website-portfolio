import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './header.css';

function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand className="title" href="/">Pawtastic!</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About Us</Nav.Link>
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;