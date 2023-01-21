console.log("Promesas");

const myPromise = new Promise((resolve, reject) => {
    const isOnline = true;

    if (isOnline)
        resolve("Promesa resuelta en linea");
    else
        reject("Promesa Rechazada, esta fuera de linea");


});
console.log("Antes de la promesa");
// console.log(myPromise()); Las promesas no se pueden consumir de esta forma
//Consumir esta promesa con .then y .catch
myPromise
    .then((response) => {
        console.log(response);
    }).catch(() => {
        console.log(error);
    });

console.log("Despues de la promesa");


//Promesa de enviar un arreglo y multiplicar sus elementos x2
//[ 2, 7 , 5] => [ 4 , 14 , 10 
//Devolver solo los numeros que sean mayor a 5

/*const datos = [ 2 , 5, 7];
const datosDuplicados = datos.map((element) => element*2 ); // [4, 10, 14]
const datosFiltrador = datosDuplicados.filter(number => number>5);
console.log(datosDuplicados);
console.log(datosFiltrador);

const procesoReducido = datos.map((element) => element*2).filter((number)=> number>5);
console.log(procesoReducido);
*/

const filtrarArreglo = (datos) => {
    const solution = new Promise((resolve, reject) => {
        const procesoReducido = datos
        .map((element) => element*2)
        .filter((number)=> number>5);
        if(procesoReducido.length)
                resolve(procesoReducido)
        else
        reject ("Tu arreglo no contiene numeros mayores a 5")
        
    });
     return solution;
}
/*filtrarArreglo([2,5,7])
.then(response =>console.log(response))
.catch(error =>console.log(error));

filtrarArreglo([2,1,1])
.then(response =>console.log(response))
.catch(error =>console.warn(error));
console.log("Termina promesa then y catch");
*/



//Consumiendo promesa con Async y Await
async function filtrarPromesaConAwait (){
    console.log("Funcion Async y await");
    console.log(await filtrarArreglo([2,4,7,10]));
    console.log("Termina funcion await");
}
//filtrarPromesaConAwait();

async function filtrarPromesaConAwaitTryCatch(){
    const refBtnAsyncAwait = document.querySelector("#btnAsyncAwait");
    refBtnAsyncAwait.disabled = true;
    try{
        //En este bloque se tratará de resolver la promesa
        console.log("Función con async y await, con try y catch");
        console.log( await filtrarArreglo([1,0,1,2]) );
    }
    catch(error){
        //En este bloque se tratará el reject que genere la promesa
        console.log("nooo, se va a acabar el mundo")
        console.warn(error);
    }
    finally{
        refBtnAsyncAwait.disabled = false;
        console.log("Termina la función con async y await");
    }
}
//filtrarPromesaConAwaitTryCatch();