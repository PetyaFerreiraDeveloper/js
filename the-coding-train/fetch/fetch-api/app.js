// Making map and tiles
const mymap = L.map('iss-map').setView([0, 0], 1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap contributors </a>';

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL, {attribution});
tiles.addTo(mymap);

// Make a marker with custom icon
const myIcon = L.icon({
    iconUrl: 'image.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
   
});
const marker = L.marker([0, 0],{icon: myIcon}).addTo(mymap);

const issApiUrl = 'https://api.wheretheiss.at/v1/satellites/25544'

let firstTime = true;
async function getIss() {
    const response = await fetch(issApiUrl);
    const data = await response.json();
    const {latitude, longitude} = data;
    // coordinates of our house
    // const latitude = 55.6517;
    // const longitude = 12.481;
    marker.setLatLng([latitude, longitude]);
    if (firstTime) {
        mymap.setView([latitude, longitude], 2);
        firstTime = false;
    }
    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2);
}

getIss();

// setInterval(getIss, 1000);