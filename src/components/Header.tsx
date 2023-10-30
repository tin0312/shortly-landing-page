import * as Images from "../assets/images"
import { useState } from "react"

const Header = () => {
	const [isNavBarOpen, setIsNavBarOpen] = useState(false)
	return (
		<div className="w-screen header-container mb-3">
			<div className="mobile:justify-between mobile:w-4/5 navbar-container">
				<div className="navbar-logo">
					<img src={Images.logo} alt="logo" />
				</div>
				<div className="mobile:hidden desktop:flex navbar-links">
					<a href="/">Features</a>
					<a href="/">Pricing</a>
					<a href="/">Resources</a>
				</div>
				<div className="mobile:hidden lg:flex navbar-login">
					<button>Login</button>
					<button>Sign Up</button>
				</div>
				{/* This section dedicated for hamburger menu */}
				<section className="mobile-menu flex desktop:hidden">
					<div
						className="hambuger-menu space-y-2"
						onClick={() => setIsNavBarOpen((prevState) => !prevState)}
					>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
					</div>
					<div className={isNavBarOpen ? "show-menu" : "hide-menu"}>
						<div
							className="absolute top-0 right-0 px-8 py-8"
							onClick={() => setIsNavBarOpen(false)}
						>
							<svg
								className="h-8 w-8 text-white-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>
						<ul className="flex flex-col items-center justify-between min-h-[250px]">
							<li className="my-8">
								<a href="/feature">Feature</a>
							</li>
							<li className="my-8">
								<a href="/pricing">Pricing</a>
							</li>
							<li className="my-8">
								<a href="/resource">Resources</a>
							</li>
							<li className="my-8">
								<button>Login</button>
							</li>
							<li className="my-8">
								<button>Sign Up</button>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div className="mobile:w-10/12  mobile:flex-col-reverse desktop:flex-row cta-container">
				<div className="mobile:w-full mobile:items-center desktop:items-start cta-message-container pt-6">
					<div className="mobile:items-center message-container-control">
						<h1 className = "mobile:text-4xl desktop:text-5xl">
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
				<div className="mobile:w-full cta-image-container">
					<img src={Images.workingIllustration} alt="illustration-working" />
				</div>
			</div>
		</div>
	)
}

export default Header
