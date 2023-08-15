import { useState } from 'react'
import { getPosition } from './geolocation'
import './App.css'

function App() {
	const [message, setMessage] = useState<string>('')

	return (
		<div className="vertical-layout">
			<header>
				<h1> Geolocation </h1>
			</header>
			<main>
				<button onClick={() => getPosition(setMessage)}> See location </button>
				<p> {message} </p>
			</main>

		</div>
	)
}

export default App


// {
// 	coords: {
// 		latitude: number,
// 		longitude: number
// 	},
// 	timestamp: number
// }