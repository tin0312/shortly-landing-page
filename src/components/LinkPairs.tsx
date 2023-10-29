import React from "react"

interface LinkData {
    [id: string]: {
      lastSubmitUrl?: string;
      shortUrl?: string;
    };
  }

  interface LinkPairsProps {
    linkData: LinkData[];
    lastSubmitUrl: string | undefined;
    shortUrl: string | undefined;
    handleCopy: () => Promise<void>;
    isCopied: boolean;
  }

const LinkPairs: React.FC<LinkPairsProps> = ({
	linkData,
	handleCopy,
    lastSubmitUrl,
	shortUrl,
	isCopied,
}) => {

    const linkPair = linkData.map((link) => {
        return (
            <div className="link-container">
                <div className="original-link">
                    <p> {lastSubmitUrl}</p>
                </div>
                <div className="short-link">
                    <p>{shortUrl}</p>
                    <button onClick={handleCopy} className={isCopied ? "copied-btn" : ""}>
                        {" "}
                        {isCopied ? "Copied!" : "Copy"}{" "}
                    </button>
                </div>
            </div>
        )
    })
	return (
		<>
            {linkPair}
        </>
	)
}

export default LinkPairs
