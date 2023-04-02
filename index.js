// images taken from : https://github.com/AsmrProg-YT/100-days-of-javascript/tree/master/Day%20%2310%20-%20Weather%20App
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


        if(search_content === "") {
          weather_box.style.display = "none";

        } else {

          weather_box.style.display = "flex";
        }
        // weather_box.style.display = "flex";
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
        console.log("Starting code");
        const icon_text = data.current.condition.text;
        console.log(icon_text);

        if (icon_text === "Sunny") {
          console.log("Sunny condition met");
          image.src = "img/clear.png";
        } else if (icon_text === "Partly cloudy") {
          console.log("Partly Cloudy condition met");
          image.src = "img/cloud.png";
        } else if (icon_text === "Blizzard") {
          console.log("Blizzard condition met");
          image.src = "img/snow.png";
        } else if (icon_text === "Rainy" || "Light rain") {
          console.log("Rainy condition met");
          image.src = "img/rain.png";
        }
        console.log("Ending code");
      })
      .catch(error => {
        console.error(error);
      });
  });
});


// Added function from ChatGPT
// Define the function that will play the song
function playSong() {
  // Replace the URL with the location of your song file
  var audio = new Audio('audio/LoL.mp3');
  audio.play();
}

// Keep track of the keys that have been pressed
var keysPressed = [];

// Add an event listener to the document to detect key presses
document.addEventListener('keydown', function (event) {
  // Check if the pressed key is q, w, e or r
  if (event.key === 'q' || event.key === 'w' || event.key === 'e' || event.key === 'r') {
    // Add the key to the array of keys pressed
    keysPressed.push(event.key);
    // If q w e r have been pressed in sequence, call the playSong function
    if (keysPressed.join('') === 'qwer') {
      playSong();
      // Reset the array of keys pressed
      keysPressed = [];
    }
  } else {
    // Reset the array of keys pressed if any other key is pressed
    keysPressed = [];
  }
});







// Evenemen sur le bouton search qui fetch les data

