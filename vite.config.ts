import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import sass from "sass"
import url from "@rollup/plugin-url"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		url({
			limit: 10000, // inline files smaller than 10 KB as data URL strings
			include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"], // defaults to .svg, .png, .jpg and .jpeg files
			emitFiles: true, // defaults to true
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
			},
		},
	},
})
