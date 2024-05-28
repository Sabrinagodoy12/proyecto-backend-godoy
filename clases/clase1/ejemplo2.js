const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a/b;

const calcular = (a, b, operacion) => {
    const resultado = operacion(a, b);
    console.log(resultado);
};
calcular (10, 2, dividir);