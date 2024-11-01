// Replace with your OpenWeatherMap API key

const lat = 7.207573;
const lon = 125.395874;
const units = "metric";
const API_KEY = 'ad18ff83e7a5532d6104bf91da401a88';
const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;

// Function to fetch and display current weather
async function getCurrentWeather() {
    try {
        const response = await fetch(CURRENT_WEATHER_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

// Function to display current weather
function displayCurrentWeather(data) {
    const weatherIcon = document.getElementById('weather-icon');
    const currentTemp = document.getElementById('current-temp');
    const currentDesc = document.getElementById('current-desc');
    const tempMax = document.getElementById('temp-max');
    const tempMin = document.getElementById('temp-min');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');

    // Update the HTML with the weather data
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`; // Weather icon
    currentTemp.innerHTML = `Temp: <b>${Math.round(data.main.temp)}</b>°C`;
    currentDesc.innerText = data.weather[0].description;
    tempMax.innerHTML = `Max: ${Math.round(data.main.temp_max)}°C`;
    tempMin.innerHTML = `Min: ${Math.round(data.main.temp_min)}°C`;
    sunrise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
    sunset.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
}

// Function to fetch and display weather forecast
async function getWeatherForecast() {
    try {
        const response = await fetch(FORECAST_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayWeatherForecast(data);
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
    }
}

// Function to display weather forecast
function displayWeatherForecast(data) {
    const firstDay = document.getElementById('first-day');
    const secondDay = document.getElementById('second-day');
    const thirdDay = document.getElementById('third-day');

    // Get the first three days of the forecast
    const forecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")); // Get forecasts at noon

    if (forecasts.length >= 3) {
        firstDay.innerHTML = `Monday: <b>${Math.round(forecasts[0].main.temp)}°C</b>`;
        secondDay.innerHTML = `Wednesday: <b>${Math.round(forecasts[1].main.temp)}°C</b>`;
        thirdDay.innerHTML = `Thursday: <b>${Math.round(forecasts[2].main.temp)}°C</b>`;
    }
}

// Fetch weather data on page load
window.onload = function() {
    getCurrentWeather();
    getWeatherForecast();
};
