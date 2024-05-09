import React, {useEffect, useRef } from 'react'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

const RwandaMap = () => {
    const mapRef = useRef()

    useEffect(() => {
        const map = new Map({
            basemap: 'streets-navigation-vector'
        })

        const view = new MapView({
            container: mapRef.current,
            map: map, 
            center: [-118.805, 34.027],
            zoom: 13
        })

        const featureLayer = new FeatureLayer({
            url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0'
        })

        map.add(featureLayer);

        return () => {
            if (view) {
                view.destroy()
            }
        };
    }, [])

    const mapStyle = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        right: 0
    };

    return (
        <div className='map-container' ref={mapRef} style={mapStyle} />
    );
};

export default RwandaMap;