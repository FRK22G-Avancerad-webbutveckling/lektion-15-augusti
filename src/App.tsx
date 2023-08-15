import { useState } from 'react'
import './App.css'

function App() {
	const [message, setMessage] = useState<string>('')


	function getPosition() {
		console.log('getPosition 1');
		if( 'geolocation' in navigator ) {
			console.log('getPosition 2');	
			navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
				console.log('Position is: ', position)
				const coords: GeolocationCoordinates = position.coords
				console.log('coords: ', coords);
				console.log('timestamp: ', position.timestamp);
				
				// Todo: skriv ut positionen på ett användarvänligt sätt!
				setMessage(`Your position is: ${coords.latitude} latitude, ${coords.longitude} longitude.`)
			}, error => {
				console.log('Position error', error);
				setMessage('Please enable position to use this app.')
			})
			console.log('getPosition 3');	
		}
	}

	return (
		<div className="vertical-layout">
			<header>
				<h1> Geolocation </h1>
			</header>
			<main>
				<button onClick={getPosition}> See location </button>
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