import { Col, Row } from 'react-bootstrap';
import LogoImg from '../public/logo.jpg';
import Gallery from '../components/gallery';
function Home() {
	return (
		<div>
			<Row>
				<Col className="col-4 m-auto">
					<img alt="logo" src={LogoImg} />
					<Gallery />
				</Col>
			</Row>
		</div>
	);
}

export default Home;