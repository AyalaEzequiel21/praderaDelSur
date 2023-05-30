import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { MapContainerStyle } from '.';

export interface MapProps {
}

const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: 37.7749, // Latitud de la ubicación central
    lng: -122.4194 // Longitud de la ubicación central
  };

const Map: React.FC<MapProps> = () => {
	return (
		<MapContainerStyle>
			<LoadScript googleMapsApiKey="AIzaSyCrv2pzax5GfgvdFiFKQC6qT4wNEnhFyPI">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10} // Nivel de zoom inicial
			/>
			</LoadScript>
		</MapContainerStyle>
	)
};

export default Map;
