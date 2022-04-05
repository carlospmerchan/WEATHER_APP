window.onload = () => {
  let succcess = (position) =>  {

    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let alt = position.coords.altitude;

    alert(`Estas en ${lat} latitud, ${long} longitud`);
  }
  let error = () =>{
    alert ('error!')
  }
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(succcess, error);
  }else{
      alert('Permite a esta app conocer la ubiación para mejorar el servicio :)')
  };
  
}

