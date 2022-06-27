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