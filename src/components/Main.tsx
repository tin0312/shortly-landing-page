import React from "react"

const Main = () => {
	// const [url, setUrl] = useState()
	// const getUrl = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setUrl(e.target.value)
	// }
	// const handleSubmit = () => {
	// 	console.log()
	// }
	return (
		<div className="main-container">
			<div className="section-container">
				<div className="form-container">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="url"
							id="url"
							value={url}
							onChange={getUrl}
							placeholder="Shorten a link here..."
						/>
						<button type="submit">Shorten it!</button>
					</form>
				</div>
				<div className="statistic-container">
					<div className="statistic-header-container">
						<h3>Advanced Statistics</h3>
						<p>
							Track how your links are performing across the web with <br />
							our advanced statistics dashboard.
						</p>
					</div>

					<div className="feature-wrapper">
						<div className="feature-container one">
							<section>
								<h4 className="feature-title">Brand Recognition</h4>
								<p className="feature-intro">
									Boost your brand recognition with each click. Generic links don’t
									mean a thing. Branded links help instil confidence in your content.
								</p>
							</section>
						</div>
						<div className="feature-container two">
							<section>
								<h4 className="feature-title">Detailed Records</h4>
								<p className="feature-intro">
									Gain insights into who is clicking your links. Knowing when and
									where people engage with your content helps inform better
									decisions.
								</p>
							</section>
						</div>
						<div className="feature-container three">
							<section>
								<h4 className="feature-title">Fully Customizable</h4>
								<p className="feature-intro">
									Improve brand awareness and content discoverability through
									customizable links, supercharging audience engagement.
								</p>
							</section>
						</div>
					</div>
				</div>
				<div className="secondary-cta-container">
					<h3>Boost your links today</h3>
					<button>Get Started</button>
				</div>
			</div>
		</div>
	)
}

export default Main
