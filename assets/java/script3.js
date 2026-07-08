// Arreglos y ciclos Lección n°3
// Punto I: Crear un arreglo con una lista de elementos

let arreglo = ["Perro", "Gato", "Pájaro", "pez", "conejo"];

// Punto II: Usar for y while para recorrer arreglos

let mascotas = ["Perro", "Gato", "Pájaro", "pez", "conejo"];

for (let i = 0; i < mascotas.length; i++) {
    console.log(mascotas[i]);
}

let mascotas2 = ["Perro", "Gato", "Pájaro", "pez", "conejo"];

let i = 0;

while (i < mascotas2.length) {
    console.log(mascotas2[i]);
    i++;
}

// Punto III: Implementar una función que filtre elementos según una condición

let mascotasObjetos = [
    { nombre: "Julieta", tipo: "Perro" },
    { nombre: "Thom", tipo: "Gato" }
];

let encontrada = mascotasObjetos.find(mascota => mascota.nombre === "Thom");

console.log(encontrada);