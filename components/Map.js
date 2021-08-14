import ReactMapGL from "react-map-gl";

function Map() {
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/divops/cksaylyls14bs17mwka35lf9a"
            mapboxApiAccessToken={process.env.mapbox_key}
        ></ReactMapGL>
    );
}

export default Map;
