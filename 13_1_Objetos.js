//Asignación directa de propiedades
const persona = { nombre: "Federico" };
persona.edad = 25;
persona.ciudad = "Sevilla";


//Delete elimina propiedades
const usuario = { nombre: "Luis", edad: 33 };
delete usuario.edad;


//Object.assign()
const alumno = { nombre: "Mario" };
Object.assign(auto, { edad: 27, ciudad: "Cadiz" });


//Object.defineProperty()
const periodico = {};
Object.defineProperty(producto, "precio", {
  euros: 1,
  editable: true
});


//Object.defineProperties()
const personaje = {};
Object.defineProperties(personaje, {
  clase: { subclase: "Brujo", modificable: false },
  nivel: { inicio: 1, modificable: true }
});


//Object.setPrototypeOf()
const animal = { come: true };
const perro = {};
Object.setPrototypeOf(perro, animal);


//Modificar propiedades anidadas
const configuracion = {
  tema: "claro",
  idioma: {
    nombre: "es"
  }
};
configuracion.idioma.nombre = "en";


//Agregar métodos al objeto
const calculadora = {};
calculadora.sumar = function (a, b) {
  return a + b;
};


//Object.preventExtensions()
const coche = { marca: "Ford" };
Object.preventExtensions(coche);
coche.modelo = "Fiesta"; 


//Object.seal()
const cuenta = { saldo: 100 };
Object.seal(cuenta);
cuenta.saldo = 200;     
delete cuenta.saldo;  


// Object.freeze()
const ajustes = { volumen: 50 };
Object.freeze(ajustes);
ajustes.volumen = 80;  

