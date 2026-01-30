// Clase padre
class Coche {
  encender() {
    console.log("El BMW se queda anticuado");
  }
}

// Clases hijas
class CocheElectrico extends Coche {
  encender() {
    console.log("El BMW eléctrico es silencioso");
  }
}

class CocheGasolina extends Coche {
  encender() {
    console.log("El BMW a gasolina hace mucho ruido");
  }
}


const modelos = [
  new CocheElectrico(),
  new CocheGasolina()
];

modelos.forEach(modelo => {
  modelo.encender();
});