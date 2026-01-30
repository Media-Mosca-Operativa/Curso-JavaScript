function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir entre 0");
    }
    console.log("Resultado:", a / b);
  } 
  catch (error) {
    console.log("Error:", error.message);
  } 
  finally {
    console.log("Operación finalizada");
  }
}

dividir(10, 2);
