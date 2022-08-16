import GalleryImage from './galleryImage';
import Carousel from 'react-bootstrap/Carousel';
import Cover1 from '../public/cover_1.jpg';
import Cover2 from '../public/cover_2.jpg';
import Cover3 from '../public/cover_3.jpg';
import Cover4 from '../public/cover_4.jpg';

function Gallery() {
	return (
		<Carousel fade>
			<Carousel.Item>
				<GalleryImage
					image={Cover1}
				/>
			</Carousel.Item>

			<Carousel.Item>
				<GalleryImage
					image={Cover2}
				/>
			</Carousel.Item>

			<Carousel.Item>
				<GalleryImage
					image={Cover3}
				/>
			</Carousel.Item>
			
			<Carousel.Item>
				<GalleryImage
					image={Cover4}
				/>
			</Carousel.Item>
		</Carousel>
	);
}

export default Gallery;