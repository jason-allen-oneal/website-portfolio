import { Row, Col, Table, Image } from 'react-bootstrap';
import ContactImg from '../public/contact.jpg';

function Contact() {
	return (
		<Row>
			<Col className="col-4 m-auto text-center">
				<Image className="page-image" fluid={true} src={ContactImg} />
				<h2>Contact Us</h2>
				<Table striped bordered hover>
					<tbody>
						<tr>
							<td>Phone #</td>
							<td>(828) 455-3145</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>wherefurmeetslove@yahoo.com</td>
						</tr>
						<tr>
							<td>Facebook</td>
							<td><a href="https://www.facebook.com/Pawtastic-Pet-Camp-101830115872163/">Pawtastic Pet Camp</a>
							</td>
						</tr>
					</tbody>
				</Table>
			</Col>
		</Row>
	);
}

export default Contact;