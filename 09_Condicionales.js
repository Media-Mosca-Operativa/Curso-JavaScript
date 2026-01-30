//CONDICIONALES
//Ejemplo condicionales 'if-else'
let licencia = true;
let practicas = true;

if (licencia === true) {
  console.log("Empiezan las practicas");
} 
else if (licencia === true && practicas === true) {
  console.log("Ya sabes lo que es la programación");
} 
else {
  console.log("Aún no estas listo, centrate en los estudios");
}

//Condicional ternario
let ternario = licencia === true ? "Puedes practicar" : "Aún no estas listo";
console.log(ternario);  

//Ejemplo condicionales "switch"
let especialidad = 'Python'; 

switch (especialidad) {
  case 'Python':
    console.log("Software");
    break;
  case 'JavaScript':
    console.log("Web");
    break;
  default:
    console.log("Estudiar nunca viene mal");
}