const shortenUrl = async (input: string | undefined) => {
	const apiToken = "Bwnl1I36Eft8Xg2J4YuVBufZoy0HcNwAQdqRPJ8RP7QFA"
	const apiUrl = "https://www.shrtlnk.dev/api/v2/link"

	const body = {
		url: input,
	}

	try {
		const response = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"api-key": `${apiToken}`,
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})

		const data = await response.json()

		console.log("Server response:", data)

		if (response.ok) {
			return data.shrtlnk
		} else {
			console.log("Error status:", response.status)
			console.log("Error message:", data.message)
		}
	} catch (error) {
		console.log("Error:", error)
	}
}

export default shortenUrl
