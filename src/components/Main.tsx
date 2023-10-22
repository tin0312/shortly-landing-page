import * as Images from "../assets/images"

const Main = () => {
	const [url, setUrl] = useState()
	const getUrl = (e: ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value)
	}
	const handleSubmit = () => {
		console.log()
	}
	return (
		<div className="main-container">
			<div className="section-container">
				<div className="form-container">
					<form>
						<input
							type="text"
							name="url"
							id="url"
							// value={url}
							// onChange={getUrl}
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
							<img src={Images.brand} className="icons" alt="brand" />
							<section>
								<h4 className="feature-title">Brand Recognition</h4>
								<p className="feature-intro">
									Boost your brand recognition with
									<br /> each click. Generic links don’t mean a <br /> thing. Branded
									links help instil <br /> confidence in your content.
								</p>
							</section>
						</div>
						<div className="feature-container two">
							<img src={Images.details} className="icons" alt="details" />
							<section>
								<h4 className="feature-title">Detailed Records</h4>
								<p className="feature-intro">
									Gain insights into who is clicking your
									<br /> links. Knowing when and where
									<br /> people engage with your content
									<br /> helps inform better decisions.
								</p>
							</section>
						</div>
						<div className="feature-container three">
							<img src={Images.customizable} className="icons" alt="customizable" />
							<section>
								<h4 className="feature-title">Fully Customizable</h4>
								<p className="feature-intro">
									Improve brand awareness and
									<br /> content discoverability through
									<br />
									customizable links, supercharging
									<br /> audience engagement.
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
