window.onload = () => {

  //
  let succcess = (position) =>  {

    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let alt = position.coords.altitude;

    


    //CIUDAD CON LAT Y LOG
    //alert(`Estas en ${lat} latitud, ${long} longitud`);
    fetch(`https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res[0])
      let city = document.querySelector(".yourCityName");
      city.innerHTML = res[0].title;

      //TEMPERATURA
      fetch(`https://www.metaweather.com/api/location/${res[0,1].woeid}`)
      .then((woeid) => woeid.json())
      .then((woeid) => {
        console.log(woeid.consolidated_weather[0]);
        let temp = document.querySelector(".yourCityTemp");
        temp.innerHTML = `${Math.round(woeid.consolidated_weather[0,1].the_temp)} ºC`;

        let bigIcon = document.querySelector(".yourCityIcon");
        //bigIcon.innerHTML = `<img src="https://www.metaweather.com/static/img/weather/${woeid.consolidated_weather[0].weather_state_abbr}.svg" />`;
        bigIcon.innerHTML = `<img src="../assets/images/${woeid.consolidated_weather[0].weather_state_abbr}.svg" />`;

        let cielo = document.querySelector(".cielo");
        cielo.innerHTML = `${(woeid.consolidated_weather[0].weather_state_name)}`;

        let humedad = document.querySelector(".humedad");
        humedad.innerHTML = `${woeid.consolidated_weather[0].humidity} %`;

        let maxTemp = document.querySelector(".maxTemp");
        maxTemp.innerHTML = `${Math.round(woeid.consolidated_weather[0].max_temp)} ºC`;

        let minTemp = document.querySelector(".minTemp");
        minTemp.innerHTML = `${Math.round(woeid.consolidated_weather[0].min_temp)} ºC`;

        let windSpeed = document.querySelector(".windSpeed");
        windSpeed.innerHTML = `${Math.round(woeid.consolidated_weather[0].wind_speed)} Km/h`;

        let precipitaciones = document.querySelector(".precipitaciones");
        precipitaciones.innerHTML = `${Math.round(woeid.consolidated_weather[0].predictability)} %`;

        let onedaynext = document.querySelector(".onewIcon");
        onedaynext.innerHTML = `<img src="https://www.metaweather.com/static/img/weather/${woeid.consolidated_weather[1].weather_state_abbr}.svg" />`;

        let fechaOneDay = document.querySelector(".fechaOneDay");
        let fecha = new Date(`${woeid.consolidated_weather[1].applicable_date}`);
        fechaOneDay.innerHTML = `${fecha.toLocaleDateString("es-ES")}`;

        let oneDayTemp = document.querySelector(".oneDayTemp");
        oneDayTemp.innerHTML = `${Math.round(woeid.consolidated_weather[0].the_temp)} ºC`;

        //https://www.metaweather.com/static/img/weather/hr.svg
      });

    })
  }
  let error = () =>{
    alert ('error!')
  }



  if(navigator.geolocation){
    
    navigator.geolocation.getCurrentPosition(succcess, error);
  }else{
      alert('Permite a esta app conocer la ubiación para mejorar el servicio :)')
  };

  //https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02
  //https://www.metaweather.com/api/location/search/?query=london

 
  
}
