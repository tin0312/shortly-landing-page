import "./App.scss"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
	return (
		<>
			<div className="page-container overflow-hidden">
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	)
}

export default App
