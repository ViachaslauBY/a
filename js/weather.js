const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const error = document.querySelector('.weather-error');

export async function getWeather() {  
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=b20a318841b5fff0ce245845f295fbbb&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  } catch(e) {
    error.textContent = `Error! city not found for ${city.value}!`
    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = ``;
    weatherDescription.textContent = ``;
    wind.textContent = ``;
    humidity.textContent = ``;
  }

  setTimeout(getWeather, 1000 * 60 * 60);  
}

const setLocalStorage = () => localStorage.setItem('city', document.querySelector('.city').value); 
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => localStorage.getItem('city') ? document.querySelector('.city').value = localStorage.getItem('city') : false;
window.addEventListener('load', getLocalStorage);


city.addEventListener('change', getWeather);

