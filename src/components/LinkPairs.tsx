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
			<div className="mobile:w-4/5 mobile:pl-3 mobile:pr-3 mobile:h-36 link-container flex mobile:flex-col desktop:flex-row" key={index}>
				<div className="original-link">
					<p>{pair[id]?.lastSubmitUrl}</p>
				</div>
				<div className="short-link flex mobile:flex-col desktop:flex-row mobile:items-start desktop:items-center mobile:gap-3 mobile:pt-1">
					<p>{pair[id]?.shortUrl}</p>
					<button
						onClick={() => handleCopy(id)}
						className={pair[id].isCopied  ? "copied-btn mobile:w-full h-6 mobile:h-10 desktop:h-10" : "mobile:w-full mobile:h-10 desktop:h-10"}
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

