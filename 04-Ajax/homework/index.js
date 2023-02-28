//defin una función que se ejecuta cuando el documento HTML está listo y cargado.
const botonMostrarAmigos = $('#boton')
const listaAmigos = $('#lista')
const inputBuscarAmigo = $('#input')
const botonBuscar = $('#search')
const amigoEncontrado = $('#amigo')
const inputBorrarAmigo = $('#inputDelete')
const botonBorrar = $('#delete')
const resultadoBorrar = $('#success')  // constantes que representan elementos del DOM, obtenidos a través de sus identificadores correspondientes.
const verAmigo = () => {
  listaAmigos.empty()
  $.ajax({
    url: `http://localhost:5000/amigos`,
    type: `GET`,
    success: (amigos) => {
      amigos.forEach(amigo => {
        listaAmigos.append(`<li>${amigo.id} - ${amigo.name}</li>`)
      });
    },
    error: (error) => {
      console.log(error)
    }
  })
}
//   const verAmigo = () => {   // agrego un evento click al botón de mostrar amigos
// $.get('http://localhost:5000/amigos', amigos => {   // realizamos la solicitud GET a través de AJAX a una url que devuelve una lista de amigos en formato JSON
//   listaAmigos.empty() //si lo saco no hace nada   
//   amigos.forEach(amigo => { //se agregan los nuevos amigos a través de un ciclo forEach
//     const li = $('<li>').text(`${amigo.id} - ${amigo.name}`)
//     listaAmigos.append(li)    //se eliminan los elementos existentes en la lista de amigos y se agregan los nuevos
//   });
// }).fail(error => console.error(error))
//}
botonMostrarAmigos.click(verAmigo);

// botonBuscar.click(() => {    //. Cuando se hace clic, se obtiene el valor del campo de entrada( o inputbrrrooo)
//   const idAmigo = inputBuscarAmigo.val()   // en una variable guardo el valor de cada entrada
//   $.get(`http://localhost:5000/amigos/${idAmigo}`, amigo => {     // se realiza la peticion GET
//     amigoEncontrado.text(`${amigo.id} - ${amigo.name}`)  // se muestra la información del amigo en un elemento del DOM.
//   }).fail(error => console.error(error))
// }); botonBuscar.click()

botonBuscar.click(() => {
  let id = inputBuscarAmigo.val()
  if (!id || id > 6) {
    alert("Ingrese un ID correcto")
  } else {
    $.ajax({
      url: `http://localhost:5000/amigos/${id}`,
      type: `GET`,
      success: (amigo) => {
        amigoEncontrado.text(` ${amigo.name}`)
        inputBuscarAmigo.val('');
        
      },
      error: (error) => { console.log(error) },
    })
  }
  
})




botonBorrar.click(() => {
  const idAmigo = inputBorrarAmigo.val();



  $.get(`http://localhost:5000/amigos/${idAmigo}`, (objetoEliminar) => {
    var nombre = objetoEliminar.name
    resultadoBorrar.text(`Amigo ${nombre} eliminado`)
    inputBorrarAmigo.val('');
  })


  $.ajax({
    url: `http://localhost:5000/amigos/${idAmigo}`,
    type: 'DELETE',
    success: () => {
      //resultadoBorrar.text(`Amigo ${idAmigo} eliminado`)
      verAmigo()
    },
    error: error => console.log(error)
  })
});
//resultadoBorrar.text(`Amigo con ID ${idAmigo} borrado`)