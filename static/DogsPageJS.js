var i = 0;
var txt ='Thank you! We will get back to you as soon as possible!';
var speed = 50;
let map;


const title = document.getElementById("title");
title.addEventListener("mouseover", changeCream);
title.addEventListener("mouseout", changeBlue);

function changeCream(){
  title.style.color = "rgb(252,236,228)";
}

function changeBlue(){
  title.style.color = "rgb(83, 138, 168)";
}




function myTyping(){
    if (i < txt.length) {
        document.getElementById("submitText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(myTyping, speed);
    }
}




//pull the pathname from window location
const activePage = window.location.pathname;
console.log(window);
console.log(window.location);
console.log(activePage);

/*create an arey of the links in nav, 
compare each to pathname and mark the one that is active
*/ 
const navLinks = document.querySelectorAll('nav a').forEach(link => {    
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
});
     
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: new google.maps.LatLng(31.2573952, 34.8028928),
    mapTypeId: "terrain",
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}


// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);

    new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }
};

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;


