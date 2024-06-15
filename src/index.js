//weather API
function updateTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#city-input");
  let city = searchInputElement.value;
  let apiKey = "7f0645393af02095t367cbc7c71e8o6d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateTemperature);
}

// Add event listeners for the search form and temperature conversion links
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", search);

// Function to convert temperature to Fahrenheit
function convertToFahrenheit(event) {
  event.preventDefault();

  // Fetch the current temperature and convert to Fahrenheit
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = parseFloat(temperatureElement.innerHTML);
  let fahrenheitTemperature = (temperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

// Function to convert temperature to Celsius
function convertToCelsius(event) {
  event.preventDefault();

  // Fetch the current temperature and convert to Celsius
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = parseFloat(temperatureElement.innerHTML);
  let celsiusTemperature = ((temperature - 32) * 5) / 9;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

// Set the current date and time
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
