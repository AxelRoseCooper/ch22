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









