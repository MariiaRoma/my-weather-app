var now = new Date();
var dateNow = now.getDate();
if (dateNow < 10) {
  dateNow = `0${date}`;
}
var month = now.getMonth() + 1;
if (month < 10) {
  month = `0${month}`;
}
var year = now.getFullYear();
document.getElementById(
  "current_date"
).innerHTML = `${dateNow}/${month}/${year}`;
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var day = days[now.getDay()];
document.querySelector("#current_day_time").innerHTML = `${day}`;
var hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
var minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
document.querySelector("#current_time").innerHTML = `${hour}:${minutes}`;

function displayweatherCondition(response) {
  console.log(response.data);
  document.querySelector("#your_enter_city").innerHTML = response.data.name;
  var showTemperatureForCity = Math.round(response.data.main.temp);
  document.querySelector("#current_temperature").innerHTML =
    showTemperatureForCity;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#max_temperature").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#min_temperature").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#pressure").innerHTML = response.data.main.pressure;
}

function dataEnter(event) {
  event.preventDefault();
  let apiKey = "30c4109a1cd7a0698b53f1fcf195aefc";
  let units = "metric";
  let city = document.querySelector("#enter_city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayweatherCondition);
}
//function showTemperature(response) {
//let temperature = Math.round(response.data.main.temp);
//console.log(temperature);
//console.log(response);
//let liCurrent = document.querySelector("#current_temperature");
//liCurrent.innerHTML = temperature;
//}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", dataEnter);
//;

//let temperature = Math.round(weather[city].temp);
//let convertTemperature = Math.round((weather[city].temp * 9) / 5 + 32);
//let humidity = weather[city].humidity;
//alert(
//`It is currently ${temperature} °C ${convertTemperature}°F in ${city} with a humidity of ${humidity} %`
//);
//}
