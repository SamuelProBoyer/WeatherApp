
// Reference de la classe wheater-search
const search = document.querySelector(".wheater-search");

// API
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd7c7365a1amsh2586d35f0aa35fdp14baf6jsn44b022d85409',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const weather_box = document.querySelector("#weather-card");
  weather_box.style.display = "none";

  search.addEventListener("click", () => {
    // Reference de la valeur du ID search-content

    const search_content = document.querySelector("#search-content").value;
    // URL API
    var url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${search_content}&days=3`;
    // Fonction qui fetch les donnees
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);


        weather_box.style.display = "flex";
        // Reference du conteneur de tous les elements
        const container = document.querySelector(".container");
        // Reference de la boite de recherche
        const search_box = document.querySelector(".search-box");
        // Reference de la classe wheater-place pour lendroit
        const weather_place = document.querySelector(".wheater-place");
        // Reference de la classe qui affiche la temperature
        const wheater_temperature = document.querySelector(".wheater-temperature");
        // Reference de la classe qui affiche la condition
        const wheater_time = document.querySelector(".wheater-time");
        // Reference de la classe qui affiche le vent
        const wheater_wind = document.querySelector(".wheater-wind");
        // Reference de la classe qui affiche lhumiditer
        const wheater_snow = document.querySelector(".wheater-snow");
        // Reference de la classe qui affiche la pluie 
        const wheater_rain = document.querySelector(".wheater-rain");
        // Reference de la classe qui affiche limage des conditions
        const image = document.querySelector(".wheater-image");



        // Affiche lemplacement 
        weather_place.innerHTML = search_content;


        // Affiche la temperature
        const feelslike_c = data.current.feelslike_c;
        wheater_temperature.innerHTML = feelslike_c;
        // Affiche lhumiditer
        const humidity = data.current.humidity;
        wheater_snow.innerHTML = humidity;
        // Affiche les precipitations
        const precip_mm = data.current.precip_mm;
        wheater_rain.innerHTML = precip_mm;
        // Affiche la vitesse du vent
        const wind_mph = data.current.wind_mph;
        wheater_wind.innerHTML = wind_mph;
        // Affiche la region
        const region = data.location.region;
        console.log(region);
        // Affiche les conditions 
        const condition = data.current.condition.text;
        wheater_time.innerHTML = condition;
        // Affiche licons des conditions
        const icon = data.current.condition.icon;
        image.src = icon


      })
      .catch(error => {
        console.error(error);
      });
  });
});

// Evenemen sur le bouton search qui fetch les data

