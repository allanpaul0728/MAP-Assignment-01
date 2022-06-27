function main() {


    function init() {
        let map = initMap();

        


    }

    // var map = L.map('map').setView([0, 0], 2);
    // L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    // L.Control.geocoder().addTo(map);

    // var geocoder = L.Control.geocoder({
    //     defaultMarkGeocode: false
    //   })
    //     .on('markgeocode', function(e) {
    //       var bbox = e.geocode.bbox;
    //       var poly = L.polygon([
    //         bbox.getSouthEast(),
    //         bbox.getNorthEast(),
    //         bbox.getNorthWest(),
    //         bbox.getSouthWest()
    //       ]).addTo(map);
    //       map.fitBounds(poly.getBounds());
    //     })
    //     .addTo(map);

    //     L.Routing.control({
    //         waypoints: [
    //             L.latLng(57.74, 11.94),
    //             L.latLng(57.6792, 11.949)
    //         ],
    //         routeWhileDragging: true,
    //         geocoder: L.Control.Geocoder.nominatim()
    //     }).addTo(map);
    L.mapquest.key = 'KEY';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

    init();
}
main();