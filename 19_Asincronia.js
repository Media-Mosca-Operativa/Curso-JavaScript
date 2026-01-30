//Callback
function saludar(nombre, callback) {
  console.log("Hola " + nombre);
  callback();
}

function despedirse() {
  console.log("Adiós");
}

saludar("Fernando", despedirse);


//Callback setTimeout
setTimeout (function() {
  console.log("setTimeout espera ciertos microsegundos")
}, 5000)


//Promises
const miPromesa = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve("La operación fue exitosa");
  } else {
    reject("Hubo un error");
  }
});

miPromesa
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.error(error);
  });


//Async await
function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function ejecutar() {
  console.log("Inicio");
  await esperar(2000); 
  console.log("Fin");
}

ejecutar();