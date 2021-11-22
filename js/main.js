

let API_key = "57829fd6252e280890a61977d838fdc4" ;

function backgroundImage(weather){
    if (weather=='Clear') {
        document.body.style.backgroundImage = "url('../images/clearSky.jpg')"
    }
    if (weather=='Clouds'){
        document.body.style.backgroundImage = "url('../images/cloudySky.jpg')"
    }
    if (weather=='Rainy'){
        document.body.style.backgroundImage = "url('../images/rainyDay.jpg')"
    }
    if (weather=='Mist'){
        document.body.style.backgroundImage = "url('../images/Mist.jpg')"
    }
}
 

async function getWeather(){

    document.getElementby
    
    let city_name = document.getElementById('searchBar').value;
    console.log(city_name)


    let request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`, {
    method: 'GET'
});


    let result = await fetch(request);

    let response = await result.json()
    console.log(response)
    console.log(response.weather[0].main)

    
    fMax = Math.round((((response.main.temp_max)-273.15)*1.8)+32)
    console.log(fMax)
    document.getElementById("tempMax").innerHTML = `${fMax}°F`;

    
    fMin= Math.round((((response.main.temp_min)-273.15)*1.8)+32)
    console.log(fMin)
    document.getElementById("tempMin").innerHTML = `${fMin}°F`;

    
    weather = response.weather[0].main
    document.getElementById("forecast").innerHTML =weather;
    console.log(backgroundImage(weather))
    
    humidity = response.main.humidity
    document.getElementById("humidity").innerHTML = `${humidity}%`;

    

}

