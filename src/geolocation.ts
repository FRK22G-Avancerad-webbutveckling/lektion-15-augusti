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

export { getPosition }


