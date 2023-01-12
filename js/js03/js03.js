console.log("Sesion js03");

const datoUsuario = { nombre: "Jessica", ciudad:"CDMX"};


//Declaracion de bloque
{
    //esto es una declaracion de bloque
    //en donde las variables (let, const)
    //solo tendran alcance dentro del bloque o bloques anidados dentro del bloque
    const datoUsuario = { nombre: "Wicho", ciudad:"aguascalientes"};

    const numPersonas=49;

    console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`);
    {
        console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`);
    }
}
console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`);

//La variable numPersonas no esta definida fuera del bloque
//console.log(`En este momento hay ${numPersonas} escuchando a Shakira`);

//Conditional If
/*Sintaxis
if(condicion verdadera) instruccion;

if(condicion verdadera) instruccion;
 else instruccion en caso contrario;


if (condicionVerdadera) {
    instrucciones;

}
*/
const respuesta = false; //confirm("Te gusto la cancion de shakira");
console.log(respuesta);
let mensaje;

if (respuesta) {
     mensaje = "Entonces ahí te va";
   // mensaje = "Entonces ahí te ";
}else 
    mensaje = "Eres fifas";
console.log(mensaje);

//Operador ternario
/* Operador de condicional mas corto que un if 
Sintaxis: condicion ? condicion_verdadera: condicion_falsa
*/

let teamFrio = true;
//let mensajeTernario = teamFrio ? " hielito" : " ponche";
//console.log(`Te voy a servir ${mensajeTernario}`);
console.log(`Te voy a servir ${teamFrio ? " hielito" : " ponche"}`);

let cantante = "serio";
console.log(`Tu reloj es ${cantante===`Shakira`?"Rolex" : cantante==="pique"? "Casio":"el sol"}`);

/* condicional if, else, else if
*Sintaxis
if(condicion verdadera) instruccion;
else if (segundaCondicion) instruccion;
else if (terceraCondicion) instruccion;
*/
let nombrePersona =`Karla`;
let marcaReloj;
if (nombrePersona=== "Shakira") marcaReloj="Rolex";
else if(nombrePersona===`Pique`) marcaReloj="Casio";
else if(nombrePersona===`Sergio`) marcaReloj="El sol";
else marcaReloj="Uno de cars";

console.log(`${nombrePersona} tu reloj es ${marcaReloj}`);

/* Operadores logicos and(&&) y or(||)

AND (&&)
A       B->     C
true    true    true
true    false   false
false           false
false   false   false

OR(||)
A       B->     C
true    true    true 
true    false   true 
false   true    true
false   false   false   
*/



/*
Conditional:Switch
Sintaxis:
    switch(expresion){
        case valor1:
            instrucciones;
            break;
        case valorn:
            instrucciones;
            break;
        default:
            instrucciones;
    }

*/
nombrePersona ='Karla';
marcaReloj ='';

switch(nombrePersona){
    case 'Sakira':
        marcaReloj ='Rolex';
        break;
    case 'karla':
    case 'Pique':
        marcaReloj ='Casio';
        break;
    case 'Sergio':
        marcaReloj ='Elsol';
    default:
        marcaReloj = 'Uno de cars';

}
console.log(` Switch - ${nombrePersona} tu reloj es ${marcaReloj}`);

/*
    Preguntar(prompt) el número de mes, del 1 al 12.
    de acuerdo al mes indica desplegar en consola
    la estación del año:
    mes 12, 1, 2 = Invierno;
    mes 3, 4, 5 = Primavera;
    mes 6, 7, 8 = Verano;
    mes 9, 10, 11 = Otoño;

    Usar switch.
    
    La estación del año es invierno
    Mes: 1
    En enero la estación del año es invierno
    mes: 6
    En junio la estación del año es verano

*/


let mesAño = prompt("Que numero de mes quieres?");
let temporada = '';
let mes='';
switch(mesAño){
    case '12':
        mes='Diciembre'
        temporada ='invierno';
        break;
    case '1':
        mes='Enero'
        temporada ='invierno';
        break;
    case '2':
        mes='Febrero'
        temporada ='invierno';
        break;
    case '3':
        mes='Marzo'
        temporada ='Primavera';
        break;
    case '4':
        mes='Abril'
        temporada ='Primavera';
        break;
    case '5':
        mes='Mayo'
        temporada ='Primavera';
        break;
    case '6':
        mes='Junio'
        temporada ='Verano';
        break;
    case '7':
        mes='Julio'
        temporada ='Verano';
        break;
    case '8':
        mes='Agosto'
        temporada ='Verano';
        break;
    case '9':
        mes='Septiembre'
        temporada = 'otono';
        break;
    case '10':
        mes='Octubre'
        temporada = 'otono';
        break;
    case '11':
        mes='Noviembre'
        temporada = 'otono';
        break;
    default:
        temporada='Error'
        mes='Error'
        
}
console.log(`Mes:  ${mesAño}`);
console.log(` En  ${mes} la temporada es ${temporada}`);
