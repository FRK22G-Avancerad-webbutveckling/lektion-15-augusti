// Skapa ett alias - för att inte behöva skriva så mycket
// T är en generisk datatyp, man måste tala om vad den ska vara när man använder den
type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>

function getPosition(setMessage: ReactSetState<string>) {
	if( 'geolocation' in navigator ) {
		navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
			// console.log('Position is: ', position)
			const coords: GeolocationCoordinates = position.coords
			// console.log('coords: ', coords);
			// console.log('timestamp: ', position.timestamp);
			
			setMessage(`Your position is: ${coords.latitude} latitude, ${coords.longitude} longitude.`)
		}, () => {
			// console.log('Position error', error);
			setMessage('Please enable position to use this app.')
		})	
	}
}


// OBS! Använd din egen nyckel
const apiKey: string = 'd47b32a6c5bdb17865286c8bae0dc8c3'

// Reverse geocoding: omvandla latitud+longitud till en adress
async function reverseGeocode(lat: number, lon: number, setAddress: ReactSetState<string>) {
	// TODO: returnera ett objekt i stället för en sträng

	const numberOfResponses = 5
	const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit${numberOfResponses}&appid=${apiKey}`
	const response = await fetch(url)
	// TODO: fixa interface för datan
	const data: Place[] = await response.json()
	console.log('Reverse geocode: ', data);

	const firstAddress: string = data[0].name
	setAddress(firstAddress)
}
// [ { name } ]
interface Place {
	name: string;
}

export { getPosition, reverseGeocode }


