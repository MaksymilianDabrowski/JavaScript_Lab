const apiKey = "d1224e2b6ffaca9a2479336994313c14";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pl&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWether(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
            case "Clear":
                weatherIcon.src = "images/clear.png";
            case "Rain":
                weatherIcon.src = "images/rain.png";
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
            case "Mist":
                weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener('click', () => {
    checkWether(searchBox.value);
})
