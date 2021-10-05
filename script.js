var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("search-bar");

var weatherPrompt = document.getElementById("weather-prompt");
var yesBtn = document.getElementById("yes-btn");
var noBtn = document.getElementById("no-btn");
var weatherContainer = document.getElementById("weather-container");
var showWeatherOn = document.getElementById("show-weather");


// Current Weather Function
let weather = {
    apiKey: "275bd71fcc87ee1fd19695e4aee1f3bb",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayWeather(data);
            })
    },

// Function to Display the Current Weather
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;

        document.getElementById("city").innerText = name;
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("description").innerText = description;
        document.getElementById("temp").innerText = temp + "° F";
    },
    search: function() {
        this.fetchWeather(document.getElementById("search-bar").value);
    }
};

// Event Listener for Search Button upon Click
document.getElementById("search-btn").addEventListener("click", function() {
    weather.search();
})

// Event Listener for Search Bar if user hits Enter Key
document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})





// Event Listener Function to Show Weather Container if User Clicks "Yes"
function showWeather() {
    weatherPrompt.style.display = "none";
};

yesBtn.addEventListener("click", function() {
    showWeather();
})




// Event Listener Function to Hide Entire Weather Container if User Clicks "No"
function hideWeather() {
    weatherContainer.style.display = "none";
}

noBtn.addEventListener("click", function() {
    hideWeather();
})


function changedMindShow() {
    weatherContainer.style.visibility = "visible";
}

showWeatherOn.addEventListener("click", function() {
    showWeather();
})

// When page loads, only the weather prompt should be showing.
// When the user clicks yes, the weather container should display 
// If the user clicks no, the container changes to just an image of a frog 
// There should be a Show/Hide button that toggles the display so the user can change their mind later
