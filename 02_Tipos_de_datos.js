//Tipos de datos PRIMITIVOS

let nombre = "Jesulin";         // string         
let hinojo = 33;                // number             
let bigint = 8564726641552485n; // bigint
let negro = true;               // boolean
let id = Symbol("id");          // symbol
let i;                          // undefined
let dinero = null;              // null

console.log(typeof nombre);     // string
console.log(typeof hinojo);     // number  
console.log(typeof bigint);     // bigint
console.log(typeof negro);      // boolean
console.log(typeof id);         // symbol
console.log(typeof i);          // undefined


//Tipos de datos NO PRIMITIVOS
/*
Arrays 
Colecciones ordenadas
compuestas de valores
Acceso por indice
*/
 

const array = ["valor 1", "valor 25", true, 30]; 
console.log(array)

/*
Objects 
Colecciones no ordenadas
compuestas de clave & valor
Aceso por clave
*/
const objeto = {   
    clave_1: "valor_1",
    clave_25: "valor_25",
    clave_bool: true,                    
    clave_num: 10, 
};
console.log(objeto)

//Function bloque de código reutilizable 
function cabras() {            
  console.log("Las cabras de pueblo dejan cagarrutas redondas");
}
cabras()

//Date para manejar fecha & hora
const hoy = new Date();
console.log(hoy)

