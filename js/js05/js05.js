console.log("Sesion Js05");

// Operador de asignacion
let estadoDiminutoDeMexico = "Tlaxcala";
/* {

    let espaniol= ingles = turco = rumano = vasco = chino = true;

}
console.log("Francisco hablaespañol  " + espaniol);
console.log("Francisco habla ingles" + ingles);
console.log("Francisco habla turco " + turco   );
console.log("Francisco habla vasco " + vasco);
console.log("Francisco habla chino " + chino); */
//Marca error por que no esta bien definido

// Operador aritmeticos
//Multiplicacion 
let metrosCuadrados = 10*30; //300
//Tenemos dos terrenos 
//metrosCuadrados = metrosCuadrados*2;
//Operadores simplificados
metrosCuadrados *= 2; //600

//division 
//dividimos terrenito entre 3 hijos
metrosCuadrados /= 3; // 200

console.log( "m2 de 3 terrenos " + metrosCuadrados);

//Residuo 
// Quiero sabersi los metros cuadrados son multiplo de 2
let multiplo2 = metrosCuadrados % 2 ===0 ? "Si": "No ";
console.log(" La cantidad es multiplo de 2? "   +multiplo2);

//Resta -
let precioTerreno = 90000;
let precioM2= precioTerreno/300;
console.log("Precio dem m2 " + precioM2 + " pesitos");
let cantidadPagada = 30000;
let cantidadRestante = precioTerreno - cantidadPagada;
console.log("Cntidad restante $" + cantidadRestante + " pesos ");
//Se abono 10,000
console.log(`Cantidad restante ${cantidadRestante -= 10000} pesos `);

//suma
//cobro por escrituras

const costoEscrituras = precioTerreno * 0.08;
precioTerreno += costoEscrituras;
console.log("Precio terreno " + (precioTerreno ));
//console.log("Precio terreno " + (precioTerreno += (precioTerreno*.08)));
//console.log(`Terreno + escrituras ${precioTerreno}`);

//Concatenacion de strings 

let nombre ="Alan";
nombre += "Garcia"; 

console.log("Nombre = " +nombre);

// Operadores de incremento y decremento
/* incrementan o decrementan en una unidad
preincremento ++variable, postincremento variable++ ;
predecremento --variable, postdecremento variable-- 
*/

let numClavosParaMiCasa = 100; 
numClavosParaMiCasa++; //101
console.log(" No. Clavo = " + numClavosParaMiCasa);
++numClavosParaMiCasa; //102
console.log(" No. Clavo = " + numClavosParaMiCasa);//102
console.log(" No. Clavo = " + numClavosParaMiCasa++);//102>103
console.log(" No. Clavo = " + ++numClavosParaMiCasa);

//------------------------------------------------

let numLadrillos = 1500;
let respuestaExamen = 95;
//Agregar punto extra

console.log("Resultado final " + respuestaExamen++); //95 -> var = 96

respuestaExamen = 82;//82;


do{
    console.log( "Resultado " + respuestaExamen); // ultimo valor 100
//++respuestaExamen o


} while (++respuestaExamen <=100)
console.log("Respuesta final " + respuestaExamen); //valor impreso 101

let nivelSuenio = 99;

if (nivelSuenio++ ===100) console.log("Me voy a mimir ");
console.log("Nivel de sueño " + nivelSuenio);



//Preincremento 
let x = 10;
x=x+1;
console.log(x);

//Postincremento

let y=10;
console.log(y);
y =y+1;
///----------
x=3;
y=x++;
console.log(`x: ${x} y: ${y}`); // 4 y 3

x=3;
y=++x
console.log(`x: ${x} y: ${y}`); // 4 y 4


// Operadores relacionales

/**
 * <= menor o igual que
 * >= mayor o igual que
 * < menor que
 * > mayor que 
 * 
 */
let noPerfumes = 10;
if(noPerfumes >= 10 ) console.log("Elegancia la de francia");

// Operador de igualdad:
/**
 * == operador igual
 * ===Estrictamente igual
 * != diferente que
 * !== estrictamente diferente que 
 * 
 */

let numMatriculaPavel = "1025";
if ( numMatriculaPavel == 1025) console.log("Hola Pavel ");
if ( numMatriculaPavel === 1025) console.log("Pavel esta en nivel 5 ");
if ( numMatriculaPavel >= 1025) console.log("Pavel esta en el CUCEI ");



//Operadores logicos 
/**
 * && (AND)
 * || (or)
 * 
 */

let numRebosos = 3;
let teGustaReboso = true;
let vives=true;

if (numRebosos >5 || teGustaReboso) console.log("Te regalo 1");

 if (numRebosos >0 || teGustaReboso && vives)
 console.log("Te lo vendo");

 /**
  *Operadores de corto circuito
  * OP1 && OP2  si OP1 = true, se ejecuta el resuoltado del OP2
  * 
  * 
  */
 let online= true;
 let mensaje = "Estamos en linea";
 let respuesta = online && mensaje;

 console.log("respuesta " + respuesta);
 
let edadPersona = 18;
mensaje = "Puede votar";
console.log( "La persona puede votar? " +  (edadPersona >= 18 && mensaje)  );

// OP1 || OP3  Si OP1 = true, se realiza el resultado de OP1

let isOnline = true;
let isActive = true;

if( isOnline){
    if ( isActive)
        console.log("Estamos in");
}

if ( isOnline && isActive)
    console.log("Estamos in");

isOnline && isActive && console.log("Estamos in");

let edadSobrina = 20;
console.log( edadSobrina >18 && "Puede votar");
let numQuesadillas = "3";
let guisado = "Huitlacoche";
 console.log("Monse comera la quesadilla  de " + (numQuesadillas && guisado));
  let nombreConductor = "pax";
  let tieneLicencia = true;
  let edadCon = 50;
  const seRentaAuto = nombreConductor && tieneLicencia && edadCon <60;
  console.log("Resultado" +seRentaAuto);
  const quesadillaDatos= {
     tortilla: "maiz",
     tieneQueso :true,
     pica: "poquito",
  }
   const picaQuesadilla = quesadillaDatos.pica && "Pica mucho";
   console.log(picaQuesadilla);