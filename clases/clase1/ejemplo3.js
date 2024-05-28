const numerosAleatorios = () => {
    return new Promise((resolve, reject) => {
        const aleatorios = {};

        for (let i = 0; i < 10000; i++) {
            const nuevoNumeroAleatorio = Math.floor(Math.random() * 20 + 1);

            if (aleatorios [nuevoNumeroAleatorio] != undefined){
                aleatorios[nuevoNumeroAleatorio]++;
            }else {
                aleatorios[nuevoNumeroAleatorio] = 1;
            }
        }

        if (Object.keys(aleatorios).length === 0) {
            reject(new Error ("Hubo un error"));
        }else{
            resolve(aleatorios);
        }
    });
};

numerosAleatorios()
.then((response) => console.log ("proceso terminado", response))
.catch((error) => console.log (error.message));

console.log("Hilo principal");

