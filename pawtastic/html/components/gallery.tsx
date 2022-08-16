import GalleryImage from './galleryImage';
import Carousel from 'react-bootstrap/Carousel';
import Cover1 from '../public/cover_1.jpg';
import Cover2 from '../public/cover_2.jpg';
import Cover3 from '../public/cover_3.jpg';
import './gallery.css';

function Gallery() {
	return (
		<Carousel fade>
			<Carousel.Item>
				<GalleryImage
					image={Cover1}
				/>
				<Carousel.Caption>
					<h3>Friends</h3>
					<p>Making new friends!</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<GalleryImage
					image={Cover2}
				/>
				<Carousel.Caption>
					<h3>Activity</h3>
					<p>Playing outside!</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<GalleryImage
					image={Cover3}
				/>
				<Carousel.Caption>
					<h3>Lounging</h3>
					<p>
						Taking it easy after a hard play!
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Gallery;