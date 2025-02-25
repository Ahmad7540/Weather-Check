let btn = document.querySelector("#search-btn");
let wheatherImg = document.querySelector("#wheatherImg");

async function fetchData() {
  try {
    let search = document.querySelector("#input").value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=88a38a941304cdaa18e09311d07f9569`;
    let response = await fetch(url);
    let data = await response.json();
    document.querySelector(".error").style.visibility = "hidden";
console.log(data);

    if ((data.weather[0].main == "Rain")) {
      wheatherImg.src = "images/rain.png";
    } else if ((data.weather[0].main == "Drizzle")) {
      wheatherImg.src = "images/drizzle.png";
    } else if ((data.weather[0].main == "Mist")) {
      wheatherImg.src = "images/mist.png";
    } else if ((data.weather[0].main == "Clouds")) {
      wheatherImg.src = "images/clouds.png";
    } else if ((data.weather[0].main == "Clear")) {
      wheatherImg.src = "images/clear.png";
    } else if ((data.weather[0].main == "Snow")) {
      wheatherImg.src = "images/snow.png";
    }

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".hum").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  } catch (error) {
    console.log("Error...", error);
    document.querySelector(".cityName").innerHTML = "City";
    document.querySelector(".temp").innerHTML = "0°C";
    document.querySelector(".hum").innerHTML = "0%";
    document.querySelector(".wind").innerHTML ="0 km/h";
    document.querySelector(".error").style.visibility = "visible";
    console.log('Run');
    
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  fetchData();
});
