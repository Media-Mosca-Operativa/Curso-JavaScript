var a = true;
var b = false;

//Operador AND "&&"
const resultado_and = a && b;
console.log(resultado_and);    // Salida false 
//Operador OR "||"
const resultado_or = a || b;
console.log(resultado_or);     // Salida true 
//Operador NOT "!"
const resultado_not = !a;
console.log(resultado_not);    // Salida false 


//Ejemplo con tipos numericos
let nota = 10;
let asistencias = 1;
const resultadoOR = nota > 5 || asistencias > 20;
console.log(resultadoOR);      // Salida true 
