//Función común
function funcion(){
    console.log("Esto es una función simple");
}
funcion()

//Funcion automatica
(function() {
  console.log("Una funcion que se ejecuta automaticamente");
})();

//Funcón con parametros
function italiano(nombre) {
  return `Buona sera stimato signore ${nombre}`;
}
console.log(italiano("Giussepe"));  

//Funcion
function italianos(nombre = "Paolo") {
  return `Buona sera stimato signore ${nombre}`;
}
console.log(italianos());  
console.log(italianos("Giussepe")); 

//Función flecha
const persona = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(persona("Steve Stifler"));  


//Funciones con argumentos
function funcion(...argumentos) {
  return argumentos.reduce((suma, lista) => suma + lista);
}

console.log(funcion(1, 2, 3, 4));  


