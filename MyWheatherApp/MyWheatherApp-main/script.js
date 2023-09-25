const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42dbd8c6e8mshfe89397f41ddc44p16f1f1jsnc6c4890d7d39',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
getWheather = (city)=>{
	cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response => response.json())
.then(response => {console.log(response)

cloud_pct.innerHTML = response.cloud_pct
temp.innerHTML = response.temp
feels_like.innerHTML = response.feels_like
humidity.innerHTML = response.humidity
min_temp.innerHTML = response.min_temp
max_temp.innerHTML = response.max_temp
wind_speed.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
sunrise.innerHTML = response.sunrise
sunset.innerHTML = response.sunset})

.catch(err => console.error(err));
}




surat = (city)=>{
	
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response => response.json())
.then(response => {console.log(response)

cloud_pctss.innerHTML = response.cloud_pct
tempss.innerHTML = response.temp
feels_likess.innerHTML = response.feels_like
humidityss.innerHTML = response.humidity
min_tempss.innerHTML = response.min_temp
max_tempss.innerHTML = response.max_temp
wind_speedss.innerHTML = response.wind_speed
wind_degreesss.innerHTML = response.wind_degrees
})

.catch(err => console.error(err));
}
vadodara = (city)=>{

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response => response.json())
.then(response => {console.log(response)

	cloud_pctv.innerHTML = response.cloud_pct
	tempv.innerHTML = response.temp
	feels_likev.innerHTML = response.feels_like
	humidityv.innerHTML = response.humidity
	min_tempv.innerHTML = response.min_temp
	max_tempv.innerHTML = response.max_temp
	wind_speedv.innerHTML = response.wind_speed
	wind_degreesv.innerHTML = response.wind_degrees
	})

.catch(err => console.error(err));
}

ahemdabad = (city)=>{

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response => response.json())
.then(response => {console.log(response)

	cloud_pctah.innerHTML = response.cloud_pct
	tempah.innerHTML = response.temp
	feels_likeah.innerHTML = response.feels_like
	humidityah.innerHTML = response.humidity
	min_tempah.innerHTML = response.min_temp
	max_tempah.innerHTML = response.max_temp
	wind_speedah.innerHTML = response.wind_speed
	wind_degreesah.innerHTML = response.wind_degrees
	})

.catch(err => console.error(err));
}



bhavnagar = (city)=>{

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response => response.json())
.then(response => {console.log(response)

	cloud_pctbh.innerHTML = response.cloud_pct
	tempbh.innerHTML = response.temp
	feels_likebh.innerHTML = response.feels_like
	humiditybh.innerHTML = response.humidity
	min_tempbh.innerHTML = response.min_temp
	max_tempbh.innerHTML = response.max_temp
	wind_speedbh.innerHTML = response.wind_speed
	wind_degreesbh.innerHTML = response.wind_degrees
	})

.catch(err => console.error(err));
}



submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWheather(city.value)
})

function getLocation() {
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(currentWheather);
	} else {
	  x.innerHTML = "Geolocation is not supported by this browser.";
	}
  
  
   
  function currentWheather(position){
	cityName.innerHTML="Your Location"
	  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude, options)
	  .then(response => response.json())
	  .then(response => {console.log(response)
	  
	  cloud_pct.innerHTML = response.cloud_pct
	  temp.innerHTML = response.temp
	  feels_like.innerHTML = response.feels_like
	  humidity.innerHTML = response.humidity
	  min_temp.innerHTML = response.min_temp
	  max_temp.innerHTML = response.max_temp
	  wind_speed.innerHTML = response.wind_speed
	  wind_degrees.innerHTML = response.wind_degrees
	 })
	  
	  .catch(err => console.error(err));
	  }
	}

  
getLocation()

surat("surat")
vadodara("vadodara")
ahemdabad("ahmedabad")
bhavnagar("bhavnagar")