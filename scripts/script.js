// SPA function 

document.querySelector('#davaologo').addEventListener('click', function(){
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages) {
    page.classList.add('hidden');
    page.classList.remove('show');

    }

    let page1 = document.querySelector('#secondarypage');
    page1.classList.add('show');
    page1.classList.remove('hidden');
})

document.querySelector('#dvoBeach').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#secondarypage');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

document.querySelector('#dvoHighland').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#secondarypage');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

document.querySelector('#dvoHiking').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#secondarypage');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

document.querySelector('#dvoMountain').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#secondarypage');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

document.querySelector('#clickHome').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#primarypage');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

document.querySelector('#mainClickHome').addEventListener('click', function() {
    let containerFluid = document.querySelectorAll('.page')
    for (let page of containerFluid) {
        page.classList.add('hidden');
        page.classList.remove('show');
    
        }
    
        let page2 = document.querySelector('#primarypage');
        page2.classList.add('show');
        page2.classList.remove('hidden');

})

// Transition to Feedback Form

// document.querySelector('#feedback').addEventListener('click', function() {
//     let containerFluid = document.querySelectorAll('.page')
//     for (let page of containerFluid) {
//         page.classList.add('hidden');
//         page.classList.remove('show');
    
//         }
    
//         let page2 = document.querySelector('#feedbackpage');
//         page2.classList.add('show');
//         page2.classList.remove('hidden');

// })

// let displayFeedbackForm = document.querySelector('#feedbackClick')
// displayFeedbackForm.addEventListener('click', ) 

let feedbackForm = document.querySelectorAll('#feedback');
for (let form of feedbackForm) {
    form.addEventListener('click', displayFeedbackPage)
}

function displayFeedbackPage() {
    let feedbackForm = document.querySelector('#feedbackpage');
    feedbackForm.classList.remove('hidden');
    feedbackForm.classList.add('show');

    let backtoMapPage = document.querySelector('#return');
    backtoMapPage.addEventListener('click', function() {
        feedbackForm.classList.remove('show');
        feedbackForm.classList.add('hidden');
    })
}

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

        document.querySelector("#dvoBeach").addEventListener('click', async function() {
            searchResultLayer.clearLayers();
            mountainLayer.clearLayers();
            davaoBeachesLayer.clearLayers();
            highlandLayer.clearLayers();
            hikingLayer.clearLayers();

            let dvoBeaches = await axios.get("dvo-geojson/beaches.json");
            
            for (let item of dvoBeaches.data) {
                console.log(item.coordinates);
                let marker = L.marker([item.coordinates[0], item.coordinates[1]],{icon:davaobeachesicon}).addTo(davaoBeachesLayer);
                marker.bindPopup(`<h4>${item.name}</h4>
                                <img src="${item.photourl}" height="100px" width="200px"/>
                                <p>${item.location}<p>
                                                                         `)
            }
            davaoBeachesLayer.addTo(map);

            
        })
        
        
        document.querySelector("#dvoHighland").addEventListener('click', async function() {
            searchResultLayer.clearLayers();
            mountainLayer.clearLayers();
            davaoBeachesLayer.clearLayers();
            highlandLayer.clearLayers();
            hikingLayer.clearLayers();

            let dvoHighland = await axios.get("dvo-geojson/highlandresort.json");
            for (let item of dvoHighland.data) {
                let marker = L.marker([item.coordinates[0], item.coordinates[1]],{icon:highlandicon}).addTo(highlandLayer);
                marker.bindPopup(`<h4>${item.name}</h4>
                <img src="${item.photourl}" height="100px" width="200px"/>
                <p>${item.location}<p>`) 
            }
            highlandLayer.addTo(map);
        })

        document.querySelector("#dvoHiking").addEventListener('click', async function() {
            searchResultLayer.clearLayers();
            mountainLayer.clearLayers();
            davaoBeachesLayer.clearLayers();
            highlandLayer.clearLayers();
            hikingLayer.clearLayers();

            let dvoHiking = await axios.get("dvo-geojson/hikingsites.json");
            for (let item of dvoHiking.data) {
                let marker = L.marker([item.coordinates[0], item.coordinates[1]],{icon:hikingicon}).addTo(hikingLayer);
                marker.bindPopup(`<h4>${item.name}</h4>
                <img src="${item.photourl}" height="100px" width="200px"/>
                <p>${item.location}<p>`) 
            }
            hikingLayer.addTo(map);
        })

        document.querySelector("#dvoMountain").addEventListener('click', async function() {
            searchResultLayer.clearLayers();
            mountainLayer.clearLayers();
            davaoBeachesLayer.clearLayers();
            highlandLayer.clearLayers();
            hikingLayer.clearLayers();

            let dvoMountain = await axios.get("dvo-geojson/mountain.json");
            for (let item of dvoMountain.data) {
                let marker = L.marker([item.coordinates[0], item.coordinates[1]],{icon:mountainicon}).addTo(mountainLayer);
                marker.bindPopup(`<h4>${item.name}</h4>
                <img src="${item.photourl}" height="100px" width="200px"/>
                <p>${item.location}<p>`) 
            }
            mountainLayer.addTo(map);
        })
        


        
        
    }

    init();
    
}
main();



