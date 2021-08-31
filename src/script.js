function showFTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);
  console.log(currentTemp);
  let currentTempElement = document.querySelector("#number");
  currentTempElement.innerHTML = `${currentTemp}`;
  console.log(response.data);
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
  let feels = document.querySelector("#feelsLike");
  let feelsTemp = Math.round(response.data.main.feels_like);
  feels.innerHTML = `${feelsTemp}°F`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  let windSpeed = Math.round(response.data.wind.speed);
  wind.innerHTML = `${windSpeed} mph`;
  let fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.removeAttribute("href");
  let celsius = document.querySelector("#celsius");
  celsius.setAttribute("href", "#");
}
function showCTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);
  console.log(currentTemp);
  let currentTempElement = document.querySelector("#number");
  currentTempElement.innerHTML = `${currentTemp}`;
  console.log(response.data);
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
  let feels = document.querySelector("#feelsLike");
  let feelsTemp = Math.round(response.data.main.feels_like);
  feels.innerHTML = `${feelsTemp}°C`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  let windSpeed = Math.round(response.data.wind.speed);
  wind.innerHTML = `${windSpeed} km/h`;
  let celsius = document.querySelector("#celsius");
  celsius.removeAttribute("href");
  let fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.setAttribute("href", "#");
}

function getCity(value) {
  let searchInput = document.getElementById("city-input");
  let city = searchInput.value;
  let apiKey = "71871e214b4db04ba50273e77608de7b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showFTemp);
}
function getCelsiusCity(value) {
  let celsius = document.querySelector("#celsius");
  celsius.removeAttribute("href");
  let searchInput = document.getElementById("city-input");
  let city = searchInput.value;
  let apiKey = "71871e214b4db04ba50273e77608de7b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input");
  getCity(cityName.value);
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", getCity);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", getCelsiusCity);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
