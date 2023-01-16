console.log("Sesion JS04");

const nombresCh22 = ["Manuel" , "Leonardo" , "Melani"];

//Usando el constructor de la clase array
const nombresCh14 = new Array("abue", "cori", "Maga", "Sebas");

console.log(nombresCh22);
console.log(nombresCh14);

const promedioEdadesCh22 = [25];

//Esta linea va a generar un array de 24 elementos.
const promedioEdadesCh14 = new Array (24); //[,,,, ..... ,,,, ]
console.log(promedioEdadesCh22);
console.log(promedioEdadesCh14);
//conocer la longitud de un arreglo .length 

console.log(`Numero de elementos ${promedioEdadesCh22.length}`);
console.log(`Numero de elementos ${promedioEdadesCh14.length}`);
//Se recomienda declarar los arrays (objetos) con const
// para prevenir que se cambie el tipo de dato

const  armasCh22 = ["manoplas","picahielo"]; //typeof(armasCh22) object
// armasCh22 = "filero" //  typeof(armasCh22 ) string
console.log( "Lista de armas: " + armasCh22);

//Leer un elemento del arreglo 
console.log(`Jessica tiene un ${armasCh22[1]}`);
console.log(`Leonardo tiene un ${armasCh22[0]}`);

//cambiar un dato del arreglo
//["filero", "picahielo"]
//Los objetos son datos mutables 
armasCh22[0]= "filero";
console.log (`Leonardo tiene un ${armasCh22[0]}`);

let nombreClica = "Los wichales";
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);
nombreClica="The wichales";




//Agregar un nuevo elemento al arreglo al final
// Lo sig. marca error porque se le esta reasignando el tipo de dato
//  armasCh22 = ["manoplas","picahielo"];
//armasCh22[5]="Machete --> [armasfilero,picahielo,,,,Machete]
armasCh22[2]="Machete";
armasCh22[armasCh22.length] = "Macana";

armasCh22.push("Cadena" , "bat");

console.log("Actualizacion de armas "+armasCh22);
 
//Agregar un emento al principio del arreglo

armasCh22.unshift(" navajas","desarmador");
console.log("Actualizacion de armas "+armasCh22);


//ciclos 
//ciclo for 
/* sintaxis 
for ( instruccion inicio; comparacion; expresion final) instruccion 

for ( instruccion inicio; comparacion; expresion final) 
{
    instrucciones;
}
for (let=i;i<=0; i++){
    insrucciones;
}
*/

for (let i = 0; i< armasCh22.length; i++) 
console.log(`Indice ${i}tiene: ${armasCh22[i]}`);

//armasCh22.for each(callBack Functions)
function iterarArreglo (elemento, indice, arreglo){

    console.log(`CB -Indice ${indice}tiene: ${elemento}`);
}
// agregar al arreglo iterarArreglo("Yo merengues" , 4);
//armasCh22.forEach(iterarArreglo);

armasCh22.forEach((elemento, indice) => console.log(`C -Indice ${indice}tiene: ${elemento}`));

for (let arma in armasCh22)
console.log(`ForIn ${ arma} tiene ${ armasCh22[arma]}`);
  //Va a iterar los elementos del arreglo 
  for (let arma of armasCh22)
  console.log(`ForOff arma: ${ arma}`);

  //Descendente iterar las armas
  for (let i = armasCh22.length -1; i>=0; i--) 
console.log(`Indice ${i}tiene: ${armasCh22[i]}`);

//para el ciclo for no es necesario indicar el inicio
//la comparacion , la expresion final

let iteracion=0;
for (; ; ){
    console.log("Valor del i " + iteracion);
    if (iteracion ===10) break;
    iteracion ++;

}
// La instruccion break rompe con la iteracion.
// La instruccion continue continua con la sig. iteracion .

for (let i = 0; i <= 10; i++) {
if (i===5) break;
console.log("For con break: " + i);//0,1,2,3,4
}
for (let i = 0; i <= 10; i++) {
    if (i===5) continue;
    console.log("For con break: " + i);//0,1,2,3,4   
}

// [ [] , [] , []]
const participantes = [ 
    ["Jose", "Maria", "Pedro"] , //Fila 1
["Tan","Juan", "Marcos","Santi"] , //Fila 2
["Mel", "Pavel" ]
]; //Fila 3

                                                //Feliz cumpleaños;
                                                //F     C
console.log("Persona CH3 (f2) 2da persona (c1)" + participantes[2][1]);
console.log("Persona CH3 (f1) 1ra persona (c1)" + participantes[1][0]);
console.log("Persona CH3 (f2) 3ra persona (c1)" + participantes[0][2]);

for (let fila = 0; fila < participantes.length; fila++) {
    console.log(participantes[fila]);
    for (let columna = 0; columna < participantes[fila].length; columna++) {
        console.log(participantes[fila][columna]);
    }   
}
//USando break en ciclos anidados 
//Dejar de mostar los nombres, cuando se encuentre Tan.
let continuarIteraciones = true;
for (fila = 0 ; fila < participantes.length; fila++) {
    if (continuarIteraciones){
        for(columna = 0; columna< participantes[fila].length; columna++){
            if(continuarIteraciones)
            console.log("Uso de break "+ participantes[fila][columna]);
            if( participantes[fila][columna]==="Tan") continuarIteraciones=false;
        }
    }
    
}
//Usando break
ciclofila:
for (fila = 0 ; fila < participantes.length; fila++) {
   ciclocolumna:
        for(columna = 0; columna< participantes[fila].length; columna++){
            console.log(`[${fila}][${columna}]`);
            console.log("Uso de break "+ participantes[fila][columna]);
            if( participantes[fila][columna]==="Tan") break ciclofila;
        }
    }
    

// Usando continue
ciclofila:
for (fila = 0 ; fila < participantes.length; fila++) {
   ciclocolumna:
        for(columna = 0; columna< participantes[fila].length; columna++){
            if( participantes[fila][columna]==="Tan") continue ciclocolumna;
            console.log(`[${fila}][${columna}]`);
            console.log("Uso de break "+ participantes[fila][columna]);
            
        }
    }
    
/* Ciclo while 
sintaxis:
    while(condicion_verdadera) instruccion;

    while(condicion_verdadera){
        instruccion;

    }
    */

 /*let numIteracion = 0;
    while (confirm ("¿ quieres seguir iterando?") ) {
        console.log("Iteracion n. " +  numIteracion++);
    }*/


    //Preguntar del 1 al 10 y saber si es el numero que penso el usuario
/* let numeroPensar = 1;
while (!confirm (`${numeroPensar} es tu numero`) ) {
    numeroPensar++;
    if (numeroPensar ===10) break;
}
console.log("Tu numero es el " + numeroPensar); */

//Lo de arriba pero mas compacto 

/* let numeroPensar = 1;
while (!confirm (`${numeroPensar++} es tu numero`) );
console.log("Tu numero es el " + --numeroPensar); */
//Ciclo do-while

/*Sintaxis:
    do {
        instrucciones;
        } while (condicion_verdadera);
    }
 */

    let valor = 10;
    while (valor <5) {
     
       console.log("While " + valor);// imprime nada 
       valor++;

    
    }


    valor =10;
    do{
        console.log("do while " + valor);//imprime 10 primero hace y sepues pregunta while

        valor ++;
    } while (valor < 5 );





    /**
     * FIFO : First In First Out
     * LIFO : Lasti In Firss Out
     * 
     */
const alimentosPerecederos = [];
//Agregando una caja
alimentosPerecederos.push("Manzanas lunes");
alimentosPerecederos.push("Manzanas miercoles");
//Sacando manzanas del lunes 
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //lunes
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //miercoles
//Tenemos ferreteria
const productos = ["desarmadores" , "cemento"];
//Agrego luces navideñas en diciembre
 productos.push("luces navideñas");
 console.log("Sacando a la venta " + productos.pop());// luces
 