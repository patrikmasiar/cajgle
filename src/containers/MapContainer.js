import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import Map from '../components/Map';
import { safetyRoutes } from '../data/safety-routes';
import * as turf from '@turf/turf'
import {getDirections, getDistances} from './libs';
import {geojson, mapConfig} from '../utils';
import {DESTINATION} from '../data/destionation';
import {MAPBOX_ACCESS_TOKEN} from '../env';

let myMarker = null;
let friendMarkerGlobal = null;

const MapContainer = () => {
  useEffect(() => {
    initMap();
  }, [true]);

  const initMap = () => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map(mapConfig);
    
    map.on("load", function () {
      map.addSource("safety", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: safetyRoutes.map(route => turf.lineString(route)),
        },
      });

      map.addLayer({
        'id': 'safety',
        'type': 'line',
        'source': 'safety',
        'layout': {
          'line-cap': 'round',
          'line-join': 'round'
        },
        'paint': {
          'line-color': '#74A8F5',
          'line-width': 10,
          'line-opacity': 0.5
        }
      })

      new mapboxgl.Marker({
        color: 'red'
      }).setLngLat(DESTINATION).addTo(map);
  
      map.on('click', (e) => {
        const source = [e.lngLat.lng, e.lngLat.lat];

        getDistances({source, routes: safetyRoutes}, (data) => {
    
          let index = data.distances[0].indexOf(Math.min(...data.distances[0].slice(1)))
  
          let cursor = 1
          let route = safetyRoutes.map((route, index) => {
            let interval = [cursor, cursor+route.length, index]
            cursor += route.length
            return interval
          }).filter(interval => interval[0] <= index && interval[1] > index)[0]
  
          index = index-route[0]
          const customRoute = safetyRoutes[route[2]][index]
    
          let params = {
            coordinates: [
              source,
              customRoute
            ]
          }
    
          getDirections(params, (data) => {
            const coords = data.features[0].geometry.coordinates
            geojson.features[0].geometry.coordinates = [...coords, ...safetyRoutes[route[2]].slice(index)]
            map.getSource('route').setData(geojson)
          })
    
        })

        const el = document.createElement('div');
        el.className = 'marker';

        if (myMarker) {
          myMarker.remove();
        }

        const marker = new mapboxgl.Marker(el).setLngLat(source).addTo(map);
        myMarker = marker;

        let friendPositionIndex = 0;
        const friendMarker = document.createElement('div');
        friendMarker.className = 'friend-marker';
        const friendDestinations = [[17.160618,48.158648],[17.142136,48.161783],[17.14218,48.161733],[17.142215,48.161693],[17.14251,48.161363],[17.1427,48.161153],[17.142804,48.161053],[17.143036,48.160785],[17.143669,48.160225],[17.143917,48.160339],[17.143955,48.1603],[17.144235,48.160002],[17.144657,48.159497],[17.144768,48.159371],[17.144823,48.159315],[17.144911,48.159215],[17.144965,48.159153],[17.145057,48.159047],[17.145112,48.158985],[17.145457,48.159123],[17.145894,48.15928],[17.14659,48.159558],[17.146808,48.159644],[17.147452,48.159897],[17.147504,48.159916],[17.147759,48.159996],[17.148024,48.160065],[17.148224,48.160118],[17.148578,48.160184],[17.148878,48.160241],[17.148879,48.16024],[17.148897,48.16019],[17.148905,48.160167],[17.148932,48.159997],[17.148982,48.159686],[17.149038,48.159311],[17.149074,48.159084],[17.149929,48.159141],[17.150644,48.159188],[17.151171,48.159223],[17.152059,48.159278],[17.152051,48.159314],[17.152033,48.159405],[17.151603,48.15928],[17.151545,48.159276],[17.151396,48.1603],[17.177058,48.15878],[17.176796,48.158761],[17.176586,48.158745],[17.176098,48.158708],[17.175114,48.158634],[17.174577,48.158589],[17.174177,48.158559],[17.173545,48.158514],[17.173455,48.158508],[17.1725,48.15844],[17.172487,48.158439],[17.171798,48.158385],[17.168371,48.158136],[17.166818,48.158],[17.166504,48.157998],[17.16595,48.157957],[17.163757,48.157791],[17.16354,48.157754],[17.163364,48.157722],[17.163175,48.157742],[17.163104,48.15772],[17.163034,48.157699],[17.162836,48.15768],[17.162719,48.157713],[17.162627,48.157665],[17.162458,48.157621],[17.162015,48.157711],[17.161897,48.157697],[17.161861,48.157694],[17.160969,48.157619],[17.160058,48.157568],[17.158108,48.157425],[17.157724,48.1574],[17.156794,48.157327],[17.156528,48.157329],[17.156496,48.157519],[17.156461,48.157734],[17.15643,48.15792],[17.156223,48.157903],[17.156057,48.15789],[17.155276,48.157831],[17.155256,48.157906],[17.155161,48.158447],[17.155021,48.159323],[17.154742,48.159384],[17.154386,48.159592],[17.154409,48.159456],[17.152058,48.159278],[17.152049,48.159314],[17.152033,48.159405],[17.151602,48.15928],[17.151544,48.159276],[17.151396,48.1603],[17.161969,48.165483],[17.162019,48.165449],[17.162015,48.165369],[17.162012,48.165176],[17.162026,48.16508],[17.162083,48.164997],[17.162134,48.164995],[17.162122,48.164832],[17.162495,48.164819],[17.162466,48.164233],[17.16245,48.163968],[17.162386,48.162936],[17.162322,48.161896],[17.162287,48.161327],[17.162292,48.161254],[17.162329,48.161071],[17.162265,48.161059],[17.161858,48.161073],[17.16167,48.161133],[17.161107,48.161085],[17.161038,48.161076],[17.160975,48.161051],[17.160936,48.161033],[17.160874,48.160999],[17.16108,48.160847],[17.161144,48.160746],[17.161241,48.16066],[17.161393,48.160161],[17.161418,48.160112],[17.16133,48.16008],[17.161246,48.160042],[17.161158,48.16001],[17.160889,48.1599],[17.160206,48.159851],[17.159942,48.159833],[17.159686,48.159813],[17.159422,48.159797],[17.159171,48.159775],[17.158933,48.159761],[17.158827,48.159755],[17.158319,48.159717],[17.157819,48.159685],[17.157706,48.159675],[17.156292,48.159575],[17.156238,48.15954],[17.156258,48.159413],[17.156181,48.159406],[17.155979,48.159392],[17.15531,48.159346],[17.155021,48.159324],[17.154748,48.159381],[17.154437,48.159565],[17.154385,48.159596],[17.154409,48.159449],[17.154391,48.159448],[17.154361,48.159445],[17.153871,48.159407],[17.153721,48.159396],[17.153461,48.159375],[17.153201,48.159355],[17.152943,48.159337],[17.152684,48.159319],[17.152443,48.159301],[17.152054,48.159277],[17.152047,48.159313],[17.152033,48.159405],[17.151603,48.15928],[17.151541,48.159276],[17.151396,48.1603],[17.158847,48.152433],[17.15882,48.15262],[17.15886,48.152625],[17.158945,48.152633],[17.158913,48.152842],[17.158856,48.153194],[17.158685,48.154209],[17.159131,48.154241],[17.159749,48.154288],[17.159667,48.154924],[17.159601,48.155306],[17.159531,48.15571],[17.159505,48.155865],[17.159472,48.15588],[17.159436,48.156048],[17.159409,48.156311],[17.159406,48.156348],[17.159396,48.156449],[17.159381,48.156449],[17.158647,48.156425],[17.15617,48.156328],[17.156129,48.156552],[17.156116,48.156599],[17.156085,48.15678],[17.155774,48.156758],[17.155754,48.156879],[17.155741,48.156941],[17.15572,48.157048],[17.155708,48.157109],[17.155698,48.15716],[17.155404,48.157137],[17.155393,48.157198],[17.155275,48.157835],[17.155253,48.157906],[17.155158,48.15845],[17.155023,48.159325],[17.154749,48.159381],[17.154386,48.159592],[17.154403,48.159449],[17.152058,48.15928],[17.152033,48.159405],[17.151602,48.15928],[17.151535,48.159275],[17.151396,48.1603]];
        
        if (friendMarkerGlobal) {
          friendMarkerGlobal.remove();
        }
        
        const friendmarker = new mapboxgl.Marker(friendMarker).setLngLat(friendDestinations[friendPositionIndex]).addTo(map)
        friendMarkerGlobal = friendmarker;

        setInterval(function() {
            if (friendPositionIndex < 46) {
              friendPositionIndex += 1;
            } else {
              friendPositionIndex = 1;
            }

          friendmarker.setLngLat(friendDestinations[friendPositionIndex]);
          return friendDestinations[friendPositionIndex];
        }, 700);
      });

      map.addSource('route', {
        'type': 'geojson',
        'data': geojson
      });
  
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-cap': 'round',
          'line-join': 'round'
        },
        'paint': {
          'line-color': '#ed6498',
          'line-width': 5,
          'line-opacity': 0.5
        }
      });
    });
  };

  
  return <Map />
};

export default MapContainer;