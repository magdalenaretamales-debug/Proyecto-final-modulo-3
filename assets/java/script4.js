//Funciones en Javascript Lección n°4

// Punto I: Crear funciones para cada operación matemática

function sumar(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}


// Pruebas en consola (F12)

console.log(sumar(20, 2));
console.log(resta(20, 2));
console.log(multiplicacion(20, 2));
console.log(division(20, 2));


// Punto II: Implementar una función que reciba parámetros y retorne un resultado

function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

console.log(calcularPromedio(8, 9, 10));


// Punto III: Llamar funciones dentro de otras funciones para optimizar el código

function calcularSuma(nota1, nota2, nota3) {
    return sumar(sumar(nota1, nota2), nota3);
}

function calcularPromedioOptimizado(nota1, nota2, nota3) {
    let sumaTotal = calcularSuma(nota1, nota2, nota3);
    return division(sumaTotal, 3);
}

console.log(calcularPromedioOptimizado(8, 9, 10));


// Punto IV: Implementar métodos dentro de un objeto para realizar operaciones matemáticas

const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },

    restar: function(a, b) {
        return a - b;
    },

    multiplicar: function(a, b) {
        return a * b;
    },

    dividir: function(a, b) {
        return a / b;
    }
};


console.log(calculadora.sumar(20, 2));
console.log(calculadora.restar(20, 2));
console.log(calculadora.multiplicar(20, 2));
console.log(calculadora.dividir(20, 2));