// const a = 2 * 3;
// console.log(a);

// const numeros = [10, 20, 50];
// const tieneEsteValor = numeros.includes(23);
// console.log(tieneEsteValor);

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 21,
    esMayorDeEdad: true
};

const encabezados = Object.keys(persona);
console.log(encabezados);

const valores = Object.values(persona);
console.log(valores);

const entradas = Object.entries(persona);
console.log(entradas);


