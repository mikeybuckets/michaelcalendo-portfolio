import { useState } from "react";
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 33.47063497663465,
        longitude: -111.74276104431185,
        zoom: 11,
    });

    const coordinates = searchResults.map((results) => ({
        longitude: results.long,
        latitude: results.lat,
    }));

    console.log(coordinates);

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/divops/cksc4retz5r8u17qkfxi52emi"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ></ReactMapGL>
    );
}

export default Map;
// latitude: 33.47063497663465,
// longitude: -111.74276104431185,