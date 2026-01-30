//Método usando this
const conductor = {
  nombre: "Fernando",
  carreras: 25,
  presentacion() {
    console.log(`El conductor ${this.nombre} ha ganado ${this.carreras} carreras`);
  }
};
conductor.presentacion();


//Objeto con varios métodos
const aula = {
  alumnos: 0,

  entran(cantidad) {
    this.alumnos += cantidad;
    console.log(`Entran ${cantidad} alumnos`);
  },
  suspenden(cantidad) {
    this.alumnos -= cantidad;
    console.log(`Suspenden ${cantidad} alumnos`);
  }
};

aula.entran(20);
aula.suspenden(2);
console.log("Se gradúan", aula.alumnos, "alumnos");


//Métodos Object.keys, values y entries
const programador = {
  JavaScript: true,
  Python: true,
  Php: true,
};
console.log(Object.keys(programador));
console.log(Object.values(programador));
console.log(Object.entries(programador));





