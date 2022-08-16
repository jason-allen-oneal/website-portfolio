import { Col, Row, Image } from 'react-bootstrap';
import AboutImg from '../public/about.jpg';

function About() {
	return (
		<div>
			<Row>
				<Col className="col-4 m-auto text-center">
					<Image className="page-image" fluid={true} src={AboutImg} />
					<h2>About Us</h2>
					<p>Hey my name is Chasty. I've been grooming since 2016! I offer pet cuts as well as breed standard cuts.</p>
				</Col>
			</Row>
		</div>
	);
}

export default About;