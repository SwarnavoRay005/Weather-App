const apikey = "701ef13864bb5d847380264bfd774d7e";
let base_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-icon");

async function check_weather(city) {
  let response = await fetch(base_url + city + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherImage.src = "images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImage.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImage.src = "images/clear.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImage.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImage.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherImage.src = "images/snow.png";
  }
}

btn.addEventListener("click", () => {
  check_weather(input.value);
});
