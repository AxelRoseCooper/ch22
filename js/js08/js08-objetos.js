console.log("Objetos");

//Crear objeto

const frutasColor = {
    fresas: "rojo" ,
    pinia:"amarillo",
    pepino: "verde",
    naranja: "verde-amarillo"
};

//Formas de leer un objeto 

 console.log(frutasColor.fresa );
 console.log(frutasColor['pepino']);
 const colorFrutaNaranja = "naranja";
 console.log(frutasColor[colorFrutaNaranja]); //verde-amarillo
//modificando un valor
frutasColor[colorFrutaNaranja]="amarillo-anaranjado"
 console.log(frutasColor[colorFrutaNaranja]); // amarillo anaranjado

 //Iterando objetos
 for(let frutaColor in frutasColor) //voy a leer las claves
 console.log("clave" ,frutaColor, "valor", frutasColor[frutaColor]);

//Uso de symbol
 const oculto = Symbol();

 const datosAutomovil = {
    modelo:"Vochido",
    fabricante:"vw",
    [oculto]: 250_000
 }
 for(let clave in datosAutomovil)
    console.log("Dato", datosAutomovil[clave]);
    console.log("Dato oculto" + datosAutomovil[oculto]);

    localStorage.setItem("automovil" ,JSON.stringify(datosAutomovil));

//Solicitud de jaime
const words = ['hello','world','java'];
const capitalizeWords = words.map(word => word[0].toUpperCase()+ word.slice(1));
console.log(capitalizeWords);//['hello','world','java'];

//----------------------------------
const myArray = [5,7,8,14];
//Creando un objeto usando el constructor

const myArrayWithConstructor = new Array (5,7,8,14)

//leyendo una propiedad del objeto myArray
//Propiedad de longitud
//Las propiedades con caracteristicas del objeto no llevan parentesis.
 myArray.length//4

 //usando e metodo para extraer el 7 y 8
 console.log(myArray.slice(1,3)); //[7,8]
