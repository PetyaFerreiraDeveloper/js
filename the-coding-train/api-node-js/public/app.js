// check if navigator.geolocation object exists

if ('geolocation' in navigator) {
    console.log('geolocation is available');
    function geo() {navigator.geolocation.getCurrentPosition(async position => {
        // console.log(position);
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = long;
        // console.log(lat);

        const data = {lat, long};
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        const response = await fetch('/api', options);
        const dataResponse = await response.json();
        console.log(dataResponse);
    })
};
} else {
    console.log('geolocation is not available')
}

let button = document.getElementById('get-geoloc');
button.addEventListener('click', geo());