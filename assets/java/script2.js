//Lección n°2
 
//Punto I:
let contador = 0;
contador =1;
console.log(contador);

const nombre = "Magdalena";
console.log(nombre);

const edad = 29;
console.log(edad);

const ciudad = "Valparaíso";
console.log(ciudad);


// Punto II: Pedir al usuario que ingrese 2 números

let numero1 = Number(prompt("Ingrese el primer número:"));
let numero2 = Number(prompt("Ingrese el segundo número:"));

console.log("Número 1:", numero1);
console.log("Número 2:", numero2);


//Punto III:Implementar operaciones matemáticas : suma, resta, multiplicación y división

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);

//Punto IV: Usar estructuras condicionales  (if , else , swich)para evaluar diferentes situaciones.

let numero = 10;

if (numero > 0) {
    console.log("El número es positivo");
} else {
    console.log("El número es negativo");
}


const dia = 5;

switch (dia) {
  case 1:
    console.log("Lunes"); break;
  case 2:
    console.log("Martes"); break;
  case 3:
    console.log("Miércoles"); break; 
  case 4:  
    console.log("Jueves"); break; 
  case 5:
    console.log("Viernes"); break;
  default:
    console.log("Otro día");
}
