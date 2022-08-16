import React from 'react';

import './footer.css';

function Footer() {
	return (
		<footer className="footer mt-auto py-3 fixed-bottom">
			<div className="container">
				<p>&copy; Copyright {new Date().getFullYear()} <strong><span className="title">For Pups Sake</span></strong>. All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;