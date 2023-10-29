import React, { useState } from "react"
import * as Images from "../assets/images"
import shortenUrl from "../services/api"
import { nanoid } from "nanoid"
import LinkPairs from "./LinkPairs"

interface LinkData {
	[id: string]: {
		lastSubmitUrl?: string | undefined
		shortUrl?: string | undefined
		isCopied: boolean
	}
}

const Main = () => {
	const [url, setUrl] = useState<string | undefined>(undefined)
	const [isInvalid, setIsInvalid] = useState(false)
	const [linkData, setLinkData] = useState<LinkData[]>([])

	const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		const { value } = e.currentTarget
		setUrl(value)
		setIsInvalid(value.trim() == "")
	}

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		if (!url) {
			setIsInvalid(true)
		}
		try {
			const result = await shortenUrl(url)
			// Limit entries to 3 inputs to be displayed.
			if (linkData.length < 3) {
				const pairId = nanoid()
				setLinkData((prevPairs) => [
					...prevPairs,
					{ [pairId]: { lastSubmitUrl: url, shortUrl: result, isCopied: false } },
				])
			}
			setUrl("")
		} catch (error) {
			console.log("Error:", error)
		}
	}

	const handleCopy = async (id: string) => {
		// set copied status for corresponding link id
		setLinkData((prevLinkData) =>
			prevLinkData.map((pair) => {
				const pairId = Object.keys(pair)[0]
				return {
					[pairId]: {
						...pair[pairId],
						isCopied: pairId === id,
					},
				}
			})
		)
		// copy to clipboard for corresponding link id
		const pair = linkData.find((pair) => id && pair[id]?.shortUrl)
		if (pair) {
			const shortUrl = pair[id]?.shortUrl
			if (shortUrl) {
				try {
					await navigator.clipboard.writeText(shortUrl)
					console.log("Async: Copying to clipboard was successful!")
				} catch (err) {
					console.error("Async: Could not copy text: ", err)
				}
			}
		}
	}

	return (
		<div className="main-container">
			<div className="section-container">
				<div className="form-container">
					<form onSubmit={handleSubmit}>
						<input
							className={isInvalid ? "invalid-input" : ""}
							type="text"
							name="url"
							id="url"
							value={url || ""}
							onChange={handleOnChange}
							placeholder="Shorten a link here..."
						/>
						<button type="submit">Shorten it!</button>
					</form>
					{isInvalid && <i className="invalid-text">Please add a link</i>}
				</div>
				<div className="statistic-container">
					{linkData.length > 0 && (
						<LinkPairs linkData={linkData} handleCopy={(id) => handleCopy(id)} />
					)}
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
