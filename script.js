const apiKey = "63656ba0439e60e366df36d785c80f92";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weather_icon=document.querySelector(".weather img");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"+"/"+data.weather[0].main;
        document.querySelector(".humidity-details").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-details").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main=="Clouds"){
            weather_icon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weather_icon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weather_icon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weather_icon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weather_icon.src="images/mist.png";
        }
        else if(data.weather[0].main=="Snow"){
            weather_icon.src="images/snow.png";
        }
        else if(data.weather[0].main=="Haze"){
            weather_icon.src="images/Haze.png";
        }
        else if(data.weather[0].main=="Thunderstorm"){
            weather_icon.src="images/thunderstorm.png";
        }

        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
        
    }
    
}

searchbtn.addEventListener("click",()=>{


    checkweather(searchbox.value);

})


