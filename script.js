const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

const cityName = document.getElementById('city-name');
const dateTime = document.getElementById('date-time');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

// Mock weather data for testing
const mockWeatherData = {
  name: "London",
  main: {
    temp: 15,
    humidity: 65,
  },
  weather: [
    {
      description: "partly cloudy",
    },
  ],
  wind: {
    speed: 10,
  },
};

const fetchMockWeather = (city) => {

  if (city.toLowerCase() === "london") {
    updateWeather(mockWeatherData);
  } else {
    alert("City not found! (Simulated)");
  }
};

// Function to update the UI
const updateWeather = (data) => {
  cityName.textContent = data.name;
  dateTime.textContent = new Date().toLocaleString();
  temp.textContent = Math.round(data.main.temp);
  description.textContent = data.weather[0].description;
  humidity.textContent = data.main.humidity;
  windSpeed.textContent = data.wind.speed;
};

// Event Listener for Search Button
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchMockWeather(city); // Use mock data
  }
});
