function addSearchResult(map, result, searchResultLayer) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker(latlng);
    resultMarker.bindPopup(`
        <h3>${result.name}</h1>
        <p>${result.location.formatted_address}</p>
    `)
    resultMarker.addTo(searchResultLayer);

    // create a search result element
    let resultElement = document.createElement('div');
    resultElement.className = 'search-result';
    resultElement.innerHTML = result.name;
    resultElement.addEventListener('click', function () {
        map.flyTo(latlng, 16);
        resultMarker.openPopup();
    })

    document.querySelector("#search-results").appendChild(resultElement);
}

// Foursquare Setup

const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3jPQM0VOS5QJpDU4k5xYJ9KQLKaR52gb7wIN7iVHS56Q=";
const headers = {
    "Accept":'application/json',
    "Authorization":API_KEY
}


async function search(lat, lng, query) {
    let ll = lat+","+lng;
    let response = await axios.get(BASE_API_URL + "/places/search",{
        "headers": headers,
        "params":{
            'll':ll,
            'query':query,
            'limit': 50,
        }
    })
    return response.data;
}