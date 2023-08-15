import { useState } from 'react'
import { getPosition, reverseGeocode } from './geolocation'
import './App.css'

function App() {
	const [message, setMessage] = useState<string>('')
	const [address, setAddress] = useState<string>('')
	// TODO: save lat+lon in state variables instead of MESSAGE
	// 59.3297408 latitude, 18.0224
	const lat = 59.3297408, lon = 18.0224

	return (
		<div className="vertical-layout">
			<header>
				<h1> Geolocation </h1>
			</header>
			<main>
				<button onClick={() => getPosition(setMessage)}> See location </button>
				<p> {message} </p>

				<button onClick={() => reverseGeocode(lat, lon, setAddress)}> Get address from location </button>
				<p> {address} </p>
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