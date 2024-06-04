//Se guarda la URL de la API en una constante
const url = "https://rickandmortyapi.com/api/character"

//recibimos datos de nuestra API
const procesarFetch = async (link) => {
  try {
      const respuesta = await fetch(link) 
      const info = await respuesta.json()
      return info
  } catch (error) {
      console.log("Hubo un error")
  }
}

//Se obtiene el elemento "container"
const elContainer = document.getElementById("container")

//Usando la función para procesar la información de la API, generamos un bloque HTML para cada elemento
procesarFetch(url)
  .then((info) => {
    console.log(info)
    info.results.forEach((elemento) => {
      elContainer.innerHTML += `
      <div class="personaje">
        <img src="${elemento.image}" />
        <h2>Name:${elemento.name}<h2/>
        <p>Status: ${elemento.status}<p>
        <p>Location: ${elemento.location.name}<p>
      <div/>
      `
    })
  })