import React from 'react';

function Footer() {
	return (
		<div className="footer mt-auto bg-light py-3 fixed-bottom">
			<div className="container">
				<p>&copy; Copyright {new Date().getFullYear()} <strong><span className="title">Pawtastic Pet Camp</span></strong>. All Rights Reserved.</p>
			</div>
		</div>
	);
}

export default Footer;