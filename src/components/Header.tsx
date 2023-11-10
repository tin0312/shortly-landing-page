import * as Images from "../assets/images"
import { useState } from "react"

const Header = () => {
	const [isNavBarOpen, setIsNavBarOpen] = useState(false)
	return (
		<div className="w-screen header-container mb-3">
			<div className="mobile:justify-between mobile:w-4/5 navbar-container flex items-center desktop:gap-8 desktop: pt-16 font-bold">
				<div className="navbar-logo">
					<img src={Images.logo} alt="logo" />
				</div>
				<div className="navbar-links mobile:hidden desktop:flex desktop: items-center desktop:gap-4 desktop:mr-auto">
					<a href="/">Features</a>
					<a href="/">Pricing</a>
					<a href="/">Resources</a>
				</div>
				<div className="navbar-login mobile:hidden desktop:flex desktop:gap-3">
					<button>Login</button>
					<button>Sign Up</button>
				</div>
				{/* Hamburger menu */}
				<section className="mobile-menu flex desktop:hidden">
					<div
						className="hambuger-menu space-y-2"
						onClick={() => setIsNavBarOpen((prevState) => !prevState)}
					>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
					</div>
					<div
						className={
							isNavBarOpen
								? "show-menu mt-12 w-5/6 h-auto pt-10 absolute text-emerald-50 left-1/2 translate-x-[-50%] rounded-xl"
								: "hide-menu hidden"
						}
					>
						<ul className="flex flex-col items-center gap-12">
							<li>
								<a href="/">Feature</a>
							</li>
							<li>
								<a href="/">Pricing</a>
							</li>
							<li>
								<a href="/">Resources</a>
							</li>
							<li>
								<div className="mobile-login-container pb-12 pt-12 mt-2 text-center w-64">
									<li className="my-4">
										<button>Login</button>
									</li>
									<li className="sign-up text-white">
										<button className="w-full h-14">Sign Up</button>
									</li>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div className=" flex mobile:w-full mobile:flex-col-reverse desktop:flex-row cta-container">
				<div className="flex flex-col justify-center mobile:w-full mobile:items-center desktop:items-start cta-message-container pt-6 desktop:gap-4">
					<div className="message-container-control mobile:items-center flex flex-col">
						<h1 className="mobile:text-4xl desktop:text-5xl font-bold">
							More than just <br />
							shorter links
						</h1>
						<p className="mobile:text-center mobile:pb-2 w-3/4">
							Build your brand’s recognition and get detailed insights on how your
							links are performing.
						</p>
					</div>
					<button className="mobile:w-5/12 mobile:h-14 mobile:mb-10">
						Get Started
					</button>
				</div>
				<div className="flex flex-col justify-center mobile:w-11/12 mobile:self-end cta-image-container desktop:items-end">
					<img src={Images.workingIllustration} alt="illustration-working" />
				</div>
			</div>
		</div>
	)
}

export default Header
