import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import bus from '../assets/bus-marker.png'
const containerStyle = {
    width: '100vw',
    height: '400px'
};

const center = {

    lat: 28.6436696,
    lng: 77.1525231
};
const markers = [
    {
        name: 'mark1',
        location: {
            lat: 28.6436696,
            lng: 77.1525231
        }
    },
    {
        name: 'mark2',
        location: {
            lat: 28.6061748,
            lng: 77.1262185
        }
    }
];



function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCXInmXsvo_wKeTeW1CRNSYgB9KczGQWbA"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
            {markers.map((marker) => {
                return (
                    <div key={marker.location}>
                        <Marker position={marker.location} options={
                            {
                                icon: bus
                            }
                        } />
                    </div>
                )
            })}
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)