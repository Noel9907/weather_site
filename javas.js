const apikey="07ddd65aff17838fd72280b20aaee5df";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".enter");
const searchbtn=document.querySelector(".btn");
const weatherocp=document.querySelector(".weaico")
  async function checkweather(city){
    const response= await fetch(apiurl+ city +`&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity;
    document.querySelector(".windspeed").innerHTML= data.wind.speed;
    if(data.weather[0].main=="Clouds"){
        weatherocp.src="images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weatherocp.src="images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherocp.src="images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherocp.src="images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherocp.src="images/mist.png";
    }
    document.querySelector(".new").style.display="block";
  }
   window.onload=searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
  })
