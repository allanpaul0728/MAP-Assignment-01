function initMap() {
    
    let davaoCity = [7.051399, 125.59477];
    let map = L.map("map", {zoomControl: false});
    map.setView(davaoCity, 10);

    
    streetMode = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZtMWVvMTAxaDNtcDVmOHp2c2lxbSJ9.4WxdONppGpMXeHO6rq5xvg'
    }).addTo(map);

    satelliteMode = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZtMWVvMTAxaDNtcDVmOHp2c2lxbSJ9.4WxdONppGpMXeHO6rq5xvg'
    });

    navigationNight = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/navigation-night-v1',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZtMWVvMTAxaDNtcDVmOHp2c2lxbSJ9.4WxdONppGpMXeHO6rq5xvg'
    });

    mapLayers = {
        'streets': streetMode,
        'satellite': satelliteMode,
        'navigation': navigationNight,
    };

    overlays = {
    };

    L.control
       .layers(mapLayers, overlays, { position: "bottomright"})
       .addTo(map);

    L.control.zoom ({
        position:'bottomleft'
    }).addTo(map);

    return map;
}

const mountainicon = L.icon({
    iconUrl: 'images/mountain-icon.png',
    iconSize: [48, 48],
})
const davaobeachesicon = L.icon({
    iconUrl: 'images/beach-icon.png',
    iconSize: [48, 48],
})
const highlandicon = L.icon({
    iconUrl: 'images/highland-icon.png',
    iconSize: [48, 48],
})
const hikingicon = L.icon({
    iconUrl: 'images/hiking-icon.png',
    iconSize: [48, 48],
})