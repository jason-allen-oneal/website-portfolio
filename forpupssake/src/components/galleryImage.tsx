import React from 'react';
import Image from 'react-bootstrap/Image';

import './galleryImage.css';

type Props = {
	image: any;
}

export default class GalleryImage extends React.Component<Props, any> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<Image
				className="d-block w-100"
				src={this.props.image}
				alt="First slide"
				fluid={true}
				thumbnail={true}
			/>
		)
	}
}