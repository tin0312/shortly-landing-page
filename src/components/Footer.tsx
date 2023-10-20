import React from "react"
import * as Images from "../assets/images"

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer-container">
				<div className="brand-container">
					<img src={Images.footerLogo} alt="logo" />
				</div>

				<div className="page-links">
					<div className="page-link">
						<h3>Features</h3>
						<a href="/">Link Shortening</a>
						<a href="/">Branded Links</a>
						<a href="/">Analytics</a>
					</div>
					<div className="page-link">
						<h3>Resources</h3>
						<a href="/">Blog</a>
						<a href="/">Developers</a>
						<a href="/">Support</a>
					</div>
					<div className="page-link">
						<h3>Company</h3>
						<a href="/">About</a>
						<a href="/">Our Team</a>
						<a href="/">Careers</a>
						<a href="/">Contact</a>
					</div>
				</div>
				<div className="social-icon-container">
					<a href="/">
						<img src={Images.facebook} alt="facebook" />
					</a>
					<a href="/">
						<img src={Images.twitter} alt="twitter" />
					</a>
					<a href="/">
						<img src={Images.pinterest} alt="pinterest" />
					</a>
					<a href="/">
						<img src={Images.instagram} alt="instagram" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
