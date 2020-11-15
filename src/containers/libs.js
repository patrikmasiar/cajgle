const directionsProfile = 'foot-walking';

export const getDirections = (params, response) => {
  let request = new XMLHttpRequest();

  request.open('POST', "https://api.openrouteservice.org/v2/directions/"+directionsProfile+"/geojson");
  
  request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', '5b3ce3597851110001cf6248c39a8ca2962b4022b0282306210393c7');
  
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      response(JSON.parse(this.responseText))
    }
  };
  
  let body = JSON.parse('{"coordinates":[],"geometry_simplify":"false"}')
  body.coordinates = params.coordinates
  
  request.send(JSON.stringify(body))
};


export const getDistances = (params, response) => {
  let request = new XMLHttpRequest();

  request.open('POST', "https://api.openrouteservice.org/v2/matrix/"+directionsProfile);

  request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', '5b3ce3597851110001cf6248c39a8ca2962b4022b0282306210393c7');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.readyState === 4) {
        response(JSON.parse(this.responseText))
      }
    }
  };

  let locations = [params.source]
  params.routes.forEach(route => {
    locations.push(...route)
  })

  let body = JSON.parse('{"locations":[], "sources":[0], "metrics":["distance", "duration"]}')
  body.locations = locations
  
  request.send(JSON.stringify(body))
};
