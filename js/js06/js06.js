console.log("JS06");

const obtenerNombre = () => prompt ("Escribe tu nombre", "Axel");

const encontrarElementoById= () => {
    const element = document.getElementById("titulo");
   // console.log("Datos del objeto " , element);
    console.log("Elementos entre etiquetas" + element.innerHTML); 
    
    //Con innerHTML puedo agregar nuevas etiquetas 
    const nombreDesarrollador = "Axel" ;//obtenerNombre(); //ToDO agregar funcion  
    element.innerHTML = `<h1> ${element.innerHTML} Manipulacion del <strong>DOM</strong> por <em>${nombreDesarrollador}</em></h1>` ;
 
   // element.innerHTML += `Manipulacion del <strong>DOM</strong> por <em>${nombreDesarrollador}</em>`;
}
encontrarElementoById();


const encontrarElementoByTagName = ()=> {
    //const elements = document.getElementsByTagName("p")
    // Obtenemos el indice 0
    const [ ,introRef] = document.getElementsByTagName("p");


    //const introRef= elements[0].innerHTML;
    // Modificamos el contenido de introRef 
    console.log(introRef.innerHTML);
    introRef.innerHTML = ` Las quesadillas van con <strong>queso </strong> por <em>es un hecho</em></h1>`

}
encontrarElementoByTagName();

//funcion que me cambie a azul las etiquetas que tengan enfasis <em>

const cambiaColoresEm = ( nuevoColor) => {
    const elements = document.getElementsByTagName("em");
    for (let element of elements)
    element.style.color = nuevoColor;

}
cambiaColoresEm("blue");