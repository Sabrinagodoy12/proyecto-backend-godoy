// FS SINCRONO
//const fs = require("fs");
// const path = require("path");

// const rutaDelArchivoTXT = path.join("files", "ejemplo.txt");

// fs.writeFileSync(rutaDelArchivoTXT, "Hola Mundo");
// fs.appendFileSync(rutaDelArchivoTXT, "\nBienvenidos");
// const contenido = fs.readFileSync(rutaDelArchivoTXT, "utf8");
// console.log(contenido);
// fs.unlinkSync(rutaDelArchivoTXT);

const fs = require("fs");
const path = require("path");
const { listenerCount } = require("process");

const rutaDelArchivoTXT = path.join("files", "ejemplo.txt");

const escribir = (contenido) => {
    fs.writeFile(rutaDelArchivoTXT, contenido, (error) => {
        if (error) {
            console.log("Hubo un error al escribir");
        }
        });
};

const agregar = (contenido) => {
fs.appendFile(rutaDelArchivoTXT, contenido, (error) => {
    if (error) {
        console.log("Hubo un error al agregar");
    }
    });
};

const leer = () => {
fs.readFile(rutaDelArchivoTXT, "utf8" ,(error, result) => {
    if (error) {
        console.log("Hubo un error al leer");
    }else{
        console.log(result);
    }
});
};

// const eliminar = () => {
// fs.unlink(rutaDelArchivoTXT, (error) => {
//     if (error) {
//         console.log("Error al eliminar");
//     }
// });
// };

const demo = async() =>{
   await escribir("Hola mundo");
   await agregar("\nBienvenidos");
   await leer();
//    await eliminar();
};

demo();