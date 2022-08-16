import { Col, Row } from 'react-bootstrap';
import Gallery from '../components/gallery';

function Home() {
	return (
		<div>
			<Row>
				<Col className="col-4 m-auto">
					<h2>Pawtastic Pet Camp</h2>
					<Gallery />
				</Col>
			</Row>
		</div>
	);
}

export default Home;