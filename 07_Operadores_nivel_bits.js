/* 
|-------------------------------|
|--------Código binario---------|
|-------------------------------|
|-128--64--32--16----8--4--2--1-|
|--0---0---0---0-----0--0--0--0-|
|-------------------------------|
*/

//OPERADOR AND  "&"    |------|
var a = 12;         // |-1100-|
var b = 8;          // |-1000-|
console.log(a & b); // |-1000-|
// Salida 8            |------|

//OPERADOR OR "|"      |------|
var a = 12;         // |-1100-|
var b = 8;          // |-1000-|
console.log(a | b); // |-1100-|
// Salida 12           |------|

//OPERADOR XOR  "^"    |------|
var a = 12;         // |-1100-|
var b = 8;          // |-1000-|
console.log(a ^ b); // |-0100-|
// Salida 4            |------|

//OPERADOR NOT "~"
var a = 9
console.log(~a)
//Salida 

//DESPLAZAMIENTO A LA IZQUIERDA "<<"
var a = 5           //|------|
a << 1              //|-0101-|
console.log(a)      //|-1010-| 
//Salida 10           |------|

//DESPLAZAMIENTO A LA DERECHA ">>"
var a = 10          //|------|
a >> 1              //|-1010-|
console.log(a)      //|-0101-| 
//Salida 5            |------|


