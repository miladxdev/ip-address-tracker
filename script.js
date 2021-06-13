let ipTracker = {
  key: "at_AmOTQApybsh7EYLZgDtnZeOLPtMjL",

  domain: "",

  fetchIp: function (ipAddress) {
    fetch(`https://geo.ipify.org/api/v1?apiKey=${this.key}&ipAddress=${ipAddress}&domain=${this.domain}`)
      .then((response) => response.json())
      .then((data) => {
        this.displayData(data);
        console.log(data);
      });
  },

  displayData: function (data) {
    let { lat } = data.location;
    let { lng } = data.location;

    let mymap = L.map("mapid").setView([lat, lng], 12);

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
  },

  search: function () {
    this.fetchIp(document.querySelector("#ip-input").value);
    console.log(document.querySelector("#ip-input").value);
  },
};

document.querySelector("#search-btn").addEventListener("click", () => {
  ipTracker.search();
});

// ipTracker.fetchIp("8.8.8.8");
