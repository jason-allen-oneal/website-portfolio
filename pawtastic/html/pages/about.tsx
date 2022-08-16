import { Col, Row, Image } from 'react-bootstrap';
import AboutImg from '../public/about.jpg';

function About() {
	return (
		<div>
			<Row>
				<Col className="col-4 m-auto text-center">
					<Image className="page-image" fluid={true} src={AboutImg} />
					<h2>About Us</h2>
					<p>We are a doggy day care service, boarding, and more! Let us know if we can assist you in any way!</p>
					<p>We offer multiple daily walks to the park which has a creek, our dogs love to cool off in or just grab a quick drink!
						We have sectioned off areas for small breeds and large breeds. We have a doggy play ground, a tug station, and bubble 🫧 area.
						We currently house up to 10 fur babies. So if your pup needs special attention and you would rather your pup be a name and not a number then our specialty boarding service is just what you need!</p>
					<p>Someone is always at the house with the dogs, we have a few spots inside our home for smaller dogs and an insulated Steele building with 8 doggy cabins.
						I have 4 fur children myself so there will always be someone to play with if your pup gets along well with others!
						We do require current vaccines, they must be up to date.</p>
					<p>If you would like more information on everything included in your dogs stay feel free to <a href="/contact">contact us</a>!</p>
					<p>We are located off of highway 90 in Lenoir NC. We are about 10 minutes from downtown lenoir and about 20 minutes from downtown Hickory. </p>
				</Col>
			</Row>
		</div>
	);
}

export default About;