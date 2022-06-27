function initMap() {


    let centerPoint = [7.1907,125.4553]
    let map = L.map('map')
    map.setView(centerPoint,15);

    let tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/%22%3EOpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/%22%3ECC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/%22%3EMapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZW5ncm9saXZlciIsImEiOiJjbDRhcWVtOGcwNmNiM2JucHZkbngycmZvIn0.Zi8uHI71NTEezC5PZG9sbg' 

    }).addTo(map);

    return map;

}
