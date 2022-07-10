// SPA function 

document.querySelector('#welcomepage').addEventListener('click', function(){
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages) {
    page.classList.add('hidden');
    page.classList.remove('show');

    }

    let page1 = document.querySelector('#map');
    page1.classList.add('show');
    page1.classList.remove('hidden');
})

document.querySelector('#mountain-icon').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#map');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

document.querySelector('#beach-icon').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#map');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

document.querySelector('#highland-icon').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#map');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

document.querySelector('#hiking-icon').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#map');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

document.querySelector('#clickHome').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#homepage');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})


// Main function

function main() {
    
    // the init function is only accessible in the main function
    function init() {
        let map = initMap();
        let mountainLayer = L.markerClusterGroup();
        mountainLayer.addTo(map);
        let davaoBeachesLayer = L.markerClusterGroup();
        davaoBeachesLayer.addTo(map);
        let highlandLayer = L.markerClusterGroup();
        highlandLayer.addTo(map);
        let hikingLayer = L.markerClusterGroup();
        hikingLayer.addTo(map);
        

        // search result layer
        let searchResultLayer = L.markerClusterGroup();
        searchResultLayer.addTo(map);

        // DOMContentLoaded is fired when the HTML file is fully
        // loaded
        window.addEventListener("DOMContentLoaded", function(){
            
            document.querySelector("#btnSearch").addEventListener('click', async function(){

                // clear any existing search markers
                searchResultLayer.clearLayers();

                let query = document.querySelector("#txtQuery").value;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query);  

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for (let result of data.results) {
                    addSearchResult(map, result, searchResultLayer);
                    
                }
            })


        })

        document.querySelector("#mountain-icon").addEventListener('click', async function() {
            searchResultLayer.clearLayers();
            mountainLayer.clearLayers();
            davaoBeachesLayer.clearLayers();
            highlandLayer.clearLayers();
            hikingLayer.clearLayers();

            let mountain = await axios.get("dvo-geojson/mountain.json");
            
            for (let item of mountain.data) {
                console.log(item.coordinates);
                let marker = L.marker([item.coordinates[0], item.coordinates[1]],{icon:mountainicon}).addTo(mountainLayer);
                marker.bindPopup(`<h4>${item.name}</h4>
                                <img src="${item.photourl}" height="100px" width="200px"/>
                                <p>${item.location}<p>
                                                                         `)
            }
            mountainLayer.addTo(map);

            
        })
        
        
        document.querySelector("#beach-icon").addEventListener('click', async function() {
            searchResultLayer.clearLayers();
            mountainLayer.clearLayers();
            davaoBeachesLayer.clearLayers();
            highlandLayer.clearLayers();
            hikingLayer.clearLayers();

            let davaoBeaches = await axios.get("dvo-geojson/beaches.json");
            for (let item of davaoBeaches.data) {
                let marker = L.marker([item.coordinates[0], item.coordinates[1]],{icon:davaobeachesicon}).addTo(davaoBeachesLayer);
                marker.bindPopup(`<h4>${item.name}</h4>
                <img src="${item.photourl}" height="100px" width="200px"/>
                <p>${item.location}<p>`) 
            }
            davaoBeachesLayer.addTo(map);
        })

        document.querySelector("#highland-icon").addEventListener('click', async function() {
            searchResultLayer.clearLayers();
            mountainLayer.clearLayers();
            davaoBeachesLayer.clearLayers();
            highlandLayer.clearLayers();
            hikingLayer.clearLayers();

            let highland = await axios.get("dvo-geojson/highlandresort.json");
            for (let item of highland.data) {
                let marker = L.marker([item.coordinates[0], item.coordinates[1]],{icon:highlandicon}).addTo(highlandLayer);
                marker.bindPopup(`<h4>${item.name}</h4>
                <img src="${item.photourl}" height="100px" width="200px"/>
                <p>${item.location}<p>`) 
            }
            highlandLayer.addTo(map);
        })

        document.querySelector("#hiking-icon").addEventListener('click', async function() {
            searchResultLayer.clearLayers();
            mountainLayer.clearLayers();
            davaoBeachesLayer.clearLayers();
            highlandLayer.clearLayers();
            hikingLayer.clearLayers();

            let hiking = await axios.get("dvo-geojson/hikingsites.json");
            for (let item of hiking.data) {
                let marker = L.marker([item.coordinates[0], item.coordinates[1]],{icon:hikingicon}).addTo(hikingLayer);
                marker.bindPopup(`<h4>${item.name}</h4>
                <img src="${item.photourl}" height="100px" width="200px"/>
                <p>${item.location}<p>`) 
            }
            hikingLayer.addTo(map);
        })
        


        
        
    }

    init();
    
}
main();



