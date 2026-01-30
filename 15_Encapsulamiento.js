class Persona {
 #edad; //Atributo privado

  constructor(edad) {
    this.#edad = edad; 
  }
//get obtiene el valor de una propiedad
  getEdad() {
    return this.#edad;
  }
//set modifica el valor de una propiedad
  setEdad(nuevaEdad) {
    if (nuevaEdad > 0) {
      this.#edad = nuevaEdad;
    }
  }
}

const p1 = new Persona(20);
console.log(p1.getEdad()); 

p1.setEdad(30);
console.log(p1.getEdad()); 

//console.log(p1.#edad); 
