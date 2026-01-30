class Coche {
  constructor(marca) {
    this.marca = marca;
  }

  mostrarMarca() {
    console.log(`Marca: ${this.marca}`);
  }
}

class Modelo extends Auto {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }

  mostrarModelo() {
    console.log(`Modelo: ${this.modelo}`);
  }
}
const auto_1 = new Modelo("BMW", "M3");

auto_1.mostrarMarca();   
auto_1.mostrarModelo();  
console.log(auto_1.marca);  
console.log(auto_1.modelo);  
