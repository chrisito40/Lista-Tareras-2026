/* Referencias al documento del DOM */

const tareaEntrada = document.getElementById("tareaEntrada");
const botonAregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");
const mensaje = document.getElementById("mensaje");



/* Función para crear el elmento tarea (Función creadora de Nodo Tarea)*/

function crearElementoTarea() {
  // Crear los elementos html de la tarea
  const tareaContenedor = document.createElement("div");
  const tareaTexto = document.createElement("p");
  const iconosContenedor = document.createElement("div");
  const iconoCompletada = document.createElement("i");
  const iconoEliminar = document.createElement("i");

  // Creamos la estructura de la tarea
  iconosContenedor.append(iconoCompletada, iconoEliminar);
  tareaContenedor.append(tareaTexto, iconosContenedor);

  // Agregamos las clases a los elmentos de la tarea
  tareaContenedor.classList.add("tarea");
  tareaTexto.classList.add("tarea-texto");
  // Sigale con los otros
  iconosContenedor.classList.add("tarea-iconos");
  iconoCompletada.classList.add("bi" , "bi-check-circle");
  iconoEliminar.classList.add("bi" , "bi-trash2");

  // Agregamos el texto del usuario
  tareaTexto.innerText = tareaEntrada.value;

  // Escuchadores de los iconos
  iconoCompletada.addEventListener("click", (e) => {
    // codigo que se ejecuta
    const tareaElmento = e.target.parentNode.parentNode;
    const esCompletada = tareaElmento.classList.contains("tarea-completada");

    tareaElmento.classList.toggle("tarea-completada");
    
    if(esCompletada) {
      e.target.classList.remove("bi-dash-circle");
      e.target.classList.add("bi-check-circle");
    } else {
      e.target.classList.remove("bi-check-circle");
      e.target.classList.add("bi-dash-circle");
    }

  })

  iconoEliminar.addEventListener("click", (e) => {
    // codigo que se ejecuta
    const tareaElmento = e.target.parentNode.parentNode;
    tareaElmento.remove();
  })

  // Retornamos la estructura de la tarea
  return tareaContenedor; 
}

/* Escuchador Botón*/
botonAregar.addEventListener("click", agregarTarea);


/* Función Agregar el Elemento Tarea */

function agregarTarea(){
  // Generar la constante para evaular si hay texto o no
  const texto = tareaEntrada.value.trim();
  
 // Evaluar la constante de texto
 if (texto) {
  
  // Traemos el elemento retornado por la función crearElementoTarea
 const elementoTarea = crearElementoTarea();
 contenedorTareas.append(elementoTarea);

 // Reiniciar el value del input
 tareaEntrada.value = "";

 // Mostrar el mensaje de tarea creada satifactoriamente
 mensaje.textContent = "Tarea creada satisfactoriamente! 😀";

  
 }else{
  // Ejecutas esto otro
   mensaje.textContent = "No escribiste nada chamaco! 😞";
 }

 
}

/* Hacemos que al presionar la tecla Enter en el input se agregue la tarea */

tareaEntrada.addEventListener("keydown", (e) => {
  // Evaluamos la tecla presionada
  if(e.key == "Enter") {
    // Esto ocurre
     agregarTarea();
  }
})

/* Mostrar un mensaje al escribir */

tareaEntrada.addEventListener("input", () => {
  // Evaluamos si el valor del input esta vacío
  if(tareaEntrada.value.trim() === ""){

    mensaje.textContent = "Escribe tu proxímo tarea! 😎";

  } else {

     mensaje.textContent = "Al finalizar dar enter! 😯";

  }
})




