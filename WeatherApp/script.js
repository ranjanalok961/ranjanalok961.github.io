
function display(){
    var ele=document.getElementById("data");
    ele.classList.remove("p");
    ele.classList.add("data");
    var x=document.getElementById("city").value;
    document.getElementById("pcity").innerHTML= x ;
    document.getElementById("city").value="";
    document.getElementById("day").innerHTML = Date();
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd8364edc31msh8b923d7742a56f8p103aa1jsnfe5c61ef2e81',
		    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + x , options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            document.getElementById("cloud").innerHTML =response['cloud_pct'];
            document.getElementById("temp").innerHTML =response['temp'] +" °C";
            document.getElementById("fl").innerHTML = response['feels_like'] +" °C";
            document.getElementById("hu").innerHTML = response['humidity'] +" %";
            document.getElementById("mint").innerHTML = response['min_temp'] +" °C";
            document.getElementById("maxt").innerHTML = response['max_temp'] +" °C";
            document.getElementById("speed").innerHTML =response['wind_speed'] + " Km/h";
            document.getElementById("wind_degrees").innerHTML =response['wind_degrees'];
            document.getElementById("sunrise").innerHTML =response['sunrise'];
            document.getElementById("sunset").innerHTML = response['sunset'];
        })
        .catch(err => console.error(err));

   }
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'd8364edc31msh8b923d7742a56f8p103aa1jsnfe5c61ef2e81',
    //         'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://open-weather13.p.rapidapi.com/city/' + x , options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response)
            
    //     document.getElementById("cloud").innerHTML +=response['clouds']['all'];
    //     document.getElementById("temp").innerHTML +=Math.round((response['main']['temp']-32)/1.8) +" °C";
    //     document.getElementById("fl").innerHTML += Math.round((response['main']['feels_like']-32)/1.8) +" °C";
    //     document.getElementById("hu").innerHTML += response['main']['humidity'] +" %";
    //     document.getElementById("mint").innerHTML += Math.round((response['main']['temp_min']-32)/1.8) +" °C";
    //     document.getElementById("maxt").innerHTML += Math.round((response['main']['temp_max']-32)/1.8) +" °C";
    //     document.getElementById("speed").innerHTML +=response['wind']['speed'] + " Km/h";
    //     document.getElementById("visibility").innerHTML += ((response['sys']['visibility']))+"M";
    //     document.getElementById("desc").innerHTML += istDate.format(response['weather']['0']['description']);
    //      })
    //     .catch(err => console.error(err));

