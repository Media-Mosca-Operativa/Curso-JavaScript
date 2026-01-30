//METODOS MUTABLES
//push agrega un valor al final
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.push(10);
console.log(a);

//pop elimina el ultimo valor
a.pop();
console.log(a);

//unshift agrega valor al inicio
a.unshift(0);
console.log(a);

//shift elimina el primer valor
a.shift();
console.log(a);

//splice agrega elimina o remplaza
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
b.splice(1, 2);   // desde índice 1, elimina 2
console.log(b);

//sort ordena los valores
[3, 1, 10, 5, 8].sort((a, b) => a - b);
// [1, 3, 5, 8, 10]

//reverse invierte los valores del array
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


//METODOS NO MUTABLES
//map transforma el array
[1, 2, 3, 4, 5].map(n => n * 2);
// [2, 4, 6, 8, 10]

//filter filtra el array
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(n => n % 2 === 0);
// [2, 4]

//reduce reduce un valor
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, n) => acc + n, 0);
// 15

//forEach reccore los valores
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(n => console.log(n));

//find primer elemento que cumple
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].find(n => n > 10);


//findIndex indice del elemento
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].findIndex(n => n > 10);
// -1

//some Devuelve booleano si cumple la condición
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].some(n => n % 2 === 0);
// true

//every Devuelve booleano si todos cumplen la condición
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].every(n => n % 2 === 0);
// false

//Metodos de copia y unión
//concat une los arrays
[1, 2].concat([3, 4, 5]);
// [1, 2, 3, 4, 5]

//slipe copia los elementos con indice aparte
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(1, 3);
// [2, 3]

//flat
[1, [2, 3, [4], 5, 6, 7, 8], 9, 10].flat(2);
// [1, 2, 3, 4, 5]

//flatmap
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].flatMap(n => [n, n]);
// [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]

//includes comprueva si el valor esta en el array
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(2);
// true

//index busca los indices del valor
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf(2);     // 1
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].lastIndexOf(2); // 1
