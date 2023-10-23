declare module "services/api" {
	const createTinyUrl: (originalUrl: string, apiToken: string) => Promise<string>

	export default createTinyUrl
}
