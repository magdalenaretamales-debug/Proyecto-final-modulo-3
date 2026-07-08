// Conceptos básicos de objetos en Javascript - Lección n°5

// Punto I: Crear un objeto con propiedades y métodos

const persona = {
    nombre: "Magdalena",
    edad: 29,
    ciudad: "Valparaíso",

    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

persona.saludar();


// Punto II: Implementar métodos dentro de un objeto para realizar operaciones matemáticas

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

console.log(calculadora.sumar(5, 3));
console.log(calculadora.restar(5, 3));
console.log(calculadora.multiplicar(5, 3));
console.log(calculadora.dividir(5, 3));


// Punto III: Usar un arreglo de objetos y recorrerlo con forEach()

const personas = [
    { nombre: "Magdalena", edad: 29, ciudad: "Valparaíso" },
    { nombre: "Juan", edad: 35, ciudad: "Santiago" },
    { nombre: "María", edad: 26, ciudad: "Concepción" }
];

personas.forEach(function(personaActual) {
    console.log(`Nombre: ${personaActual.nombre}, Edad: ${personaActual.edad}, Ciudad: ${personaActual.ciudad}`);
});