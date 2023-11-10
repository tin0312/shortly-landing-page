import * as Images from "../assets/images"

const Footer = () => {
	return (
		<div className="footer-wrapper flex justify-center items-center">
			<div className="footer-container mobile:flex-col flex justify-between py-16 text-white mobile:gap-8">
				<div className="brand-container flex mobile:justify-center desktop:items-start">
					<img src={Images.footerLogo} alt="logo" />
				</div>

				<div className="page-links mobile:flex-col mobile:items-center">
					<div className="inner-link-wrapper flex mobile:flex-col mobile:gap-10 desktop:gap-20">
						<div className="page-link mobile:text-center">
							<h3>Features</h3>
							<a href="/">Link Shortening</a>
							<a href="/">Branded Links</a>
							<a href="/">Analytics</a>
						</div>
						<div className="page-link mobile:text-center">
							<h3>Resources</h3>
							<a href="/">Blog</a>
							<a href="/">Developers</a>
							<a href="/">Support</a>
						</div>
						<div className="page-link mobile:text-center">
							<h3>Company</h3>
							<a href="/">About</a>
							<a href="/">Our Team</a>
							<a href="/">Careers</a>
							<a href="/">Contact</a>
						</div>
					</div>
				</div>
				<div className="social-icon-container flex justify-center gap-6">
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
