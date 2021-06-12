let key = "at_AmOTQApybsh7EYLZgDtnZeOLPtMjL";
let ipAddress = "5.218.104.56";
let domain = "apple.com";
let url = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ipAddress}&domain=${domain}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    displayMap(data.location.lat, data.location.lng);
    console.log(data);
  });

function displayMap(lat, lng) {
  let mymap = L.map("mapid").setView([lat, lng], 13);

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiaXRzbWlsYWQiLCJhIjoiY2twdHg4YTJ2MDc1bzJvbnpkMzM1NTNnZCJ9.ES0tgt90-43JoRJEPO9RHg",
  }).addTo(mymap);

  L.marker([lat, lng]).addTo(mymap);
}
