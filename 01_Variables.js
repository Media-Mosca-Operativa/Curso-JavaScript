//Variable vieja ES5, es posible reasignar y redeclarar
var maestros = "Cabras";
var maestros = 'Ovejas'; //Permitiendo la reclaración
console.log(maestros);

//Variable nueva ES6, es posible reasignar pero NO redeclarar
let marca = "Cabras";
marca = 'Ovejas';        //Permitiendo la reasignación
console.log(marca);

//Variable nueva ES6, NO es posible reasignar NI redeclarar
const alumno = "Mario"; //Const no tolera ninguna de ambas
console.log(alumno);

/*VARIABLES INVALIDAS
|------------------------------------------|
|const 123jesulin = "Jesulin";-------------|
|const mi-jesulin = "Jesulin";-------------|
|const mi@jesulin = "Jesulin";-------------|
|const mi jesulin = "Jesulin";-------------|
|const let = "Mi nuevo Jesulin ES6";-------|
|------------------------------------------|

VARIABLES VALIDAS*/
const $factura = 20.08;
const contraseña123 = "Contraseña de Jesulin";
const Aprendiz_123 = "Mejor no seguir esa senda";
