const createTinyUrl = async (input) => {
	const apiUrl = "https://api.tinyurl.com/create"

	const body = {
		url: input,
		domain: "tinyurl.com",
		description: "Your shortened URL",
	}

	const apiToken = "tJpHbsBaJAPqqCiMyDrdqrgs2usuJh2qjpkDMbniCTeye1c3CwPq3XyOvmFT"
	const urlWithToken = `${apiUrl}?api_token=${apiToken}`

	try {
		const response = await fetch(urlWithToken, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${apiToken}`,
			},
			body: JSON.stringify(body),
		})

		if (response.ok) {
			const data = await response.json()
			return data.tiny_url
		} else {
			const errorData = await response.json()
			console.log(errorData.message)
		}
	} catch (error) {
		throw new Error(`Fetch Error: ${error.message}`)
	}
}

export default createTinyUrl
