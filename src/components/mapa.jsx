import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';

function Mapa({ latitude, longitude }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoieWFzbWltc2FudHJiMTkwNSIsImEiOiJjbWJjcmZzcDkwem1jMmpxMTRhMHA2bm55In0.xsxvsypQ90PrNKEFEQcTWQ';
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude || -43.02278, latitude || -6.76698], 
      zoom: 10,
    });
  }, [longitude, latitude]);


  useEffect(() => {
    if (map.current && latitude && longitude) {
      map.current.flyTo({
        center: [longitude, latitude],
        zoom: 14,
      });

      new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map.current);
      
    }
    
  }, [latitude, longitude]);
  

  console.log("Longitude", longitude, "Latitude", latitude)

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
}

export default Mapa;
