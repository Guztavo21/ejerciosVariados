// let opcion = "sumar"

// switch (opcion){
//     case "sumar":
//         break;
//     case "restar":
//         break;
//     case "multiplicar":
//         break;
//     default:
//         console.log("Opcion no valida.")
//     break;
// }

//CALCULAR LAS OPERACIONES ARISMETICAS BASICAS
const realizarOperaciones = () => {
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let resultadosDiv = document.getElementById("resultados");
  console.log(numero1);
  console.log(numero2);

  if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
    alert("ingresar numeros validos que sean y mayor a cero.");
    return;
  }

  const suma = numero1 + numero2;
  const resta = numero1 - numero2;
  const division = numero1 / numero2;
  const multiplicacion = numero1 * numero2;
  const modulo = numero1 % numero2;

  resultadosDiv.innerHTML = `<p>Suma: ${suma}</p>
    <p>Resta: ${resta}</p>
    <p>División: ${division}</p>
    <p>Multiplicación: ${multiplicacion}</p>
    <p>Módulo(Residuo): ${modulo}</p>`;
};

//TRANFORMAR GRADOS CELSIUS A GRADOS KELVIN Y FAHRENHEIT
const convertirCelsiusOtrosGrados = () => {
  let celsius = parseFloat(document.getElementById("gradosCelsius").value);
  console.log(gradosCelsius);
  let resultadosGrados = document.getElementById("resultadoConversion");

  if (isNaN(celsius)) {
    alert("ingresar numeros validos");
    return;
  }

  let celsiusKelvin = celsius + 273.15;
  let celsiusFahrenheit = (celsius * 9) / 5 + 32;

  // const suma = numero1 + numero2;
  // const resta = numero1 - numero2;
  // const division = numero1 / numero2;
  // const multiplicacion  = numero1 * numero2;
  // const modulo = numero1 % numero2;

  resultadosGrados.innerHTML = `
        <p>${celsius} grados Celsius equivalen a ${celsiusKelvin.toFixed(2)} grados Kelvin.</p>
        <p>${celsius} grados Celsius equivalen a ${celsiusFahrenheit.toFixed(2)} grados Fahrenheit.</p>`;
};

//CALCULAR EL EQUIVALENTE EN AÑOS SEMANAS Y DIAS 
const calcularDias = () => {
    let dias = Number(document.getElementById("dias").value);
    console.log(dias);
    let resultadosConversion = document.getElementById("resultadoDias");
  
    if (isNaN(dias)) {
      alert("ingresar numeros validos");
      return;
    }
  
    const anios = Math.floor(dias / 365);
    const semanas = Math.floor((dias % 365) / 7);
    const diasRestantes = dias % 365 % 7;
  
    // const suma = numero1 + numero2;
    // const resta = numero1 - numero2;
    // const division = numero1 / numero2;
    // const multiplicacion  = numero1 * numero2;
    // const modulo = numero1 % numero2;
  
    resultadosConversion.innerHTML = `
    <p>${dias} días equivalen a:</p>
    <p>${anios} año(s), ${semanas} semana(s) y ${diasRestantes} día(s).</p>
    <p>Además, equivalen a ${dias * 24} horas.</p>`;
}
//sumar y calular promedio de los numeros 
function calcularSumaYPromedio() {
  
  let numero1 = parseFloat(document.getElementById("num1").value);
  let numero2 = parseFloat(document.getElementById("num2").value);
  let numero3 = parseFloat(document.getElementById("num3").value);
  let numero4 = parseFloat(document.getElementById("num4").value);
  let numero5 = parseFloat(document.getElementById("num5").value);
  let resultadoPromedio = document.getElementById("resultadoPromedio");
 
  if (isNaN(num1) || isNaN(num2)  || isNaN(num3) || isNaN(num4) || isNaN(num5) ) {
    alert("ingresar numeros validos");
    return;
  }

  const suma = numero1 + numero2 + numero3 + numero4 + numero5;
  const promedio = suma / 5;
  

  
  resultadoPromedio.innerHTML = `
      <p>La suma de los números es: ${suma}</p>
      <p>El promedio de los números es: ${promedio}</p>
  `;
}