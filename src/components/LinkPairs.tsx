import React from "react"

interface LinkData {
	[id: string]: {
		lastSubmitUrl?: string | undefined
		shortUrl?: string | undefined
        isCopied: boolean
	}
}

interface LinkPairsProps {
	linkData: LinkData[]
	handleCopy: (id: string) => Promise<void>
}

const LinkPairs: React.FC<LinkPairsProps> = ({ linkData, handleCopy}) => {
	const linkPairs = linkData.map((pair, index) => {
		const id = Object.keys(pair)[0]
		return (
			<div className="mobile:w-4/5 link-container" key={index}>
				<div className="original-link">
					<p>{pair[id]?.lastSubmitUrl}</p>
				</div>
				<div className="short-link">
					<p>{pair[id]?.shortUrl}</p>
					<button
						onClick={() => handleCopy(id)}
						className={pair[id].isCopied  ? "copied-btn" : ""}
					>
						{pair[id].isCopied ? "Copied!" : "Copy"}
					</button>
				</div>
			</div>
		)
	})

	return <>{linkPairs}</>
}

export default LinkPairs

