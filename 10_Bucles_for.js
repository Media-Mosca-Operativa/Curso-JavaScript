/*
Bucle for
-----------------------------------------------
for (inicialización; condición; incremento) {
   Bloque de código
}
*/
for (let i = 1; i < 10; i++) {
  console.log(i);  
}

/*
Bucle for in
-----------------------------------------------
for (let propiedad in objeto) {
   Bloque de código
}
*/
const persona = {
    nombre: "Gerardo",
    edad: 33,
    ciudad: "Tarragona"
};

for (let i in persona) {
    console.log(persona[i]);
}

/*
Bucle for of
-----------------------------------------------
for (let valor of iterable) {
   Bloque de código
}
*/
const colores = ["Red", "Green", "Blue"];

for (let color of colores) {
    console.log(color);
}
