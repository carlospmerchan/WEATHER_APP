window.onload = function () {
  let apiKey = 'ECnSQ16042qvabiF614DDbebD8Y6w4Db'; //añade aquí tu apikey
  let query = 'meme'; //lo que quieras buscar
  let limit = '10'; // el número de resultados que necesitas
  let resource = 'gifs'; //gifs - stickers
let caja = document.getElementById("content"); 

  let btnBuscar = document.querySelector("#btn_buscar");


  function buscar(){
    caja.innerHTML = '';
    fetch(`https://api.giphy.com/v1/${resource}/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`)
  .then(data => {
    return data.json();
  })
  .then(data => {
    console.log(data.data);
        

    data.data.forEach(function(cat, index) {
      let item = `<div><h2>${cat.title}</h2>
          <img src="${cat.images.original.url}" alt="${cat.title}">
        </div>`;
      caja.innerHTML += item;
    });
  })
  }
  
  


  btnBuscar.addEventListener("click",()=>{
    let barraBuscador = document.querySelector('#search');
    query = barraBuscador.value;

    buscar();
  })


}

