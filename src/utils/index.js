export const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        color: "#F7455D",
      },
      geometry: {
        type: "LineString",
        coordinates: [
        ],
      },
    },
  ],
};

export const mapConfig = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [17.154829, 48.160582],
  zoom: 13,
};

