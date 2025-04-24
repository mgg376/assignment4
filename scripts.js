mapboxgl.accessToken = 'pk.eyJ1IjoibWdnMzc2IiwiYSI6ImNtOWF3dmk3MzBhNWQya3EzZHpyMmQ4ZDIifQ.WXxAjUmDcjYD8K0-iKGGzQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-73.98785, 40.78689],
    zoom: 11,
    minZoom: 9,  
    maxZoom: 16, 
    maxBounds: [
      [-75, 40], 
      [-71.5, 41.5] 
    ]
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
  // Add the line
  map.addSource('greenway', {
    type: 'geojson',
    data: hudsongreenway
  });

  map.addLayer({
    id: 'greenway-line',
    type: 'line',
    source: 'greenway',
    paint: {
      'line-color': '#0320fc',
      'line-width': 4
    }
  });

  // Add markers with popups
  notablelocations.features.forEach((feature) => {
    const { coordinates } = feature.geometry;
    const { title, description, image } = feature.properties;

    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div style="text-align:center;">
        <h3>${title}</h3>
        <img src="${image}" alt="${title}" width="150" style="border-radius: 10px;" />
        <p>${description}</p>
      </div>
    `);

    new mapboxgl.Marker()
      .setLngLat(coordinates)
      .setPopup(popup)
      .addTo(map);
  });
});



