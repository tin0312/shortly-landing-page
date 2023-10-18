import React from "react"
import * as Images from "../assets/images"

const Header = () => {
	return (
		<div className="header-container">
			<div className="navbar-container">
				<div className="navbar-logo">
					<img src={Images.logo} alt="logo" />
				</div>
				<div className="navbar-links">
					<a href="/">Features</a>
					<a href="/">Pricing</a>
					<a href="/">Resources</a>
				</div>
				<div className="navbar-login">
					<button>Login</button>
					<button>Sign Up</button>
				</div>
			</div>
			<div className="cta-container">
				<div className="cta-message-container">
					<div className="message-container-control">
						<h1>
							More than just <br />
							shorter links
						</h1>
						<p>
							Build your brand’s recognition and get detailed
							<br /> insights on how your links are performing.
						</p>
					</div>
					<button>Get Started</button>
				</div>
				<div className="cta-image-container">
					<img src={Images.workingIllustration} alt="illustration-working" />
				</div>
			</div>
		</div>
	)
}

export default Header
