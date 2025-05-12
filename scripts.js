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

// Hudson River Greenway (complete)
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

  // Inwood Greenway (incomplete)
map.addSource('inwoodgreenway', {
  type: 'geojson',
  data: inwoodgreenway
});

map.addLayer({
  id: 'inwoodgreenway-line',
  type: 'line',
  source: 'inwoodgreenway',
  paint: {
    'line-color': 'red', 
    'line-width': 4
  }
});

// Existing Harlem River Greenway (complete)
map.addSource('existingharlemrivergreenway', {
  type: 'geojson',
  data: existingharlemrivergreenway
});

map.addLayer({
  id: 'existingharlemrivergreenway-line',
  type: 'line',
  source: 'existingharlemrivergreenway',
  paint: {
    'line-color': 'blue',  
    'line-width': 4
  }
});


// Harlem River Greenway 163 street to 145 street (incomplete)
map.addSource('harlemrivergreenway163to145', {
  type: 'geojson',
  data: harlemrivergreenway163to145
});

map.addLayer({
  id: 'harlemrivergreenway163to145-line',
  type: 'line',
  source: 'harlemrivergreenway163to145',
  paint: {
    'line-color': 'red',  
    'line-width': 4
  }
});

// Harlem River Greenway 145 street to 132 street (complete)
map.addSource('harlemrivergreenway145to132', {
  type: 'geojson',
  data: harlemrivergreenway145to132
});

map.addLayer({
  id: 'harlemrivergreenway145to132-line',
  type: 'line',
  source: 'harlemrivergreenway145to132',
  paint: {
    'line-color': 'blue',  
    'line-width': 4
  }
});

// Harlem River Greenway 132 street to 125 street (incomplete)
map.addSource('harlemrivergreenway132to125', {
  type: 'geojson',
  data: harlemrivergreenway132to125
});

map.addLayer({
  id: 'harlemrivergreenway132to125-line',
  type: 'line',
  source: 'harlemrivergreenway132to125',
  paint: {
    'line-color': 'red',  
    'line-width': 4
  }
});

// Harlem River Greenway 125 street to 118 street (complete)
map.addSource('harlemrivergreenway125to118', {
  type: 'geojson',
  data: harlemrivergreenway125to118
});

map.addLayer({
  id: 'harlemrivergreenway125to118-line',
  type: 'line',
  source: 'harlemrivergreenway125to118',
  paint: {
    'line-color': 'blue',  
    'line-width': 4
  }
});

// Harlem River Greenway 118 street to 114 street (incomplete)
map.addSource('harlemrivergreenway118to114', {
  type: 'geojson',
  data: harlemrivergreenway118to114
});

map.addLayer({
  id: 'harlemrivergreenway118to114-line',
  type: 'line',
  source: 'harlemrivergreenway118to114',
  paint: {
    'line-color': 'red',  
    'line-width': 4
  }
});

// East River Greenway 114 street to 75 street (complete)
map.addSource('eastrivergreenway114to75', {
  type: 'geojson',
  data: eastrivergreenway114to75
});

map.addLayer({
  id: 'eastrivergreenway114to75-line',
  type: 'line',
  source: 'eastrivergreenway114to75',
  paint: {
    'line-color': 'blue',  
    'line-width': 4
  }
});

// East River Greenway 75 street to 73 street (incomplete)
map.addSource('eastrivergreenway75to73', {
  type: 'geojson',
  data: eastrivergreenway75to73
});

map.addLayer({
  id: 'eastrivergreenway75to73-line',
  type: 'line',
  source: 'eastrivergreenway75to73',
  paint: {
    'line-color': 'red',  
    'line-width': 4
  }
});

// East River Greenway 73 street to 61 street (complete)
map.addSource('eastrivergreenway73to61', {
  type: 'geojson',
  data: eastrivergreenway73to61
});

map.addLayer({
  id: 'eastrivergreenway73to61-line',
  type: 'line',
  source: 'eastrivergreenway73to61',
  paint: {
    'line-color': 'blue',  
    'line-width': 4
  }
});

// East River Esplanade Greenway 61 street to 53 street (complete)
map.addSource('eastmidtownreenway61to53', {
  type: 'geojson',
  data: eastmidtownreenway61to53
});

map.addLayer({
  id: 'eastmidtownreenway61to53-line',
  type: 'line',
  source: 'eastmidtownreenway61to53',
  paint: {
    'line-color': 'blue',  
    'line-width': 4
  }
});
  
// UN Esplanade Greenway 53 street to 41 street (incomplete)
map.addSource('unesplanade53to41', {
  type: 'geojson',
  data: unesplanade53to41
});

map.addLayer({
  id: 'unesplanade53to41-line',
  type: 'line',
  source: 'unesplanade53to41',
  paint: {
    'line-color': 'red',  
    'line-width': 4
  }
});


// Midtown to Lower East Side Greenway (complete)
map.addSource('midtowntolesgreenway', {
  type: 'geojson',
  data: midtowntolesgreenway
});

map.addLayer({
  id: 'midtowntolesgreenway-line',
  type: 'line',
  source: 'midtowntolesgreenway',
  paint: {
    'line-color': 'blue',  
    'line-width': 4
  }
});


// Lower East Side Greenway/East Side Coastal Resiliency Project (incomplete)
map.addSource('eastsidecoastalresiliencyproject', {
  type: 'geojson',
  data: eastsidecoastalresiliencyproject
});

map.addLayer({
  id: 'eastsidecoastalresiliencyproject-line',
  type: 'line',
  source: 'eastsidecoastalresiliencyproject',
  paint: {
    'line-color': 'red',  
    'line-width': 4
  }
});


// Lower East Side Greenway (complete)
map.addSource('lesgreenway', {
  type: 'geojson',
  data: lesgreenway
});

map.addLayer({
  id: 'lesgreenway-line',
  type: 'line',
  source: 'lesgreenway',
  paint: {
    'line-color': 'blue',  
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



