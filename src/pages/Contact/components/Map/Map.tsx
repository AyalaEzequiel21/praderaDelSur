import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapContainerStyle } from '.';
import { API_KEY_MAP } from '../../../../data';

export interface MapProps {
}

const containerStyle = {
	borderRadius: '10px',
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: -34.786278, // Latitud de la ubicación central
    lng: -58.252689 // Longitud de la ubicación central
  };

const Map: React.FC<MapProps> = () => {
	return (
		<MapContainerStyle>
			<LoadScript googleMapsApiKey={API_KEY_MAP}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={15} // Nivel de zoom inicial
				>
					<Marker position={center}/>
				</GoogleMap>
			</LoadScript>
		</MapContainerStyle>
	)
};

export default Map;
