class Maestro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  greeting() {
    console.log(`Hola soy ${this.nombre} y sere tu maestro`);
  }
}

const persona_1 = new Maestro("Mario");

persona_1.greeting();

