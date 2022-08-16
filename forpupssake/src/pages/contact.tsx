import { Row, Col, Image, Table } from 'react-bootstrap';
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
							<td>(828) 383-1278</td>
						</tr>
						<tr>
							<td>Facebook</td>
							<td><a href="https://www.facebook.com/forpupssakegrooming">For Pups Sake Grooming</a>
							</td>
						</tr>
					</tbody>
				</Table>
			</Col>
		</Row>
	);
}

export default Contact;