class UserManager {
    static usuarios = [];

    #crypto;
    #algorithn;
    #key;
    #vi;

    constructor (){
        this.#crypto = require("crypto"); //Especificar el agoritmo, key y vector de inicialización
        this.#algorithn = "AES-128-CBC";
        this.#key = "miClaveSecreta12";
        this.#vi = this.#crypto.randomBytes(16);
        //Con esto se encripta la clave
    }
    #encriptar = (texto) => {
    const cifrador = this.#crypto.createCipheriv(this.#algorithn, this.#key, this.#vi);
    
    let textoEncriptado = cifrador.update(texto, "utf8", "hex"); //valor, codificacion de caracteres (Reconoce ñ acentos todo), hexadesimal
    textoEncriptado = cifrador.final("hex");

    return textoEncriptado
    }

    crearUsuario = (nombre, apellido, nombreDeUsuario, contrasenia) => {
        const nuevoUsuario = {
            nombre,
            apellido,
            nombreDeUsuario: nombreDeUsuario.trim(),
            contrasenia: this.#encriptar(contrasenia.trim()),
        };

        UserManager.usuarios.push(nuevoUsuario);
    }

    mostrarUsuario = () => {
        return UserManager.usuarios;
    }
    validarUsuario = (nombreDeUsuario, contrasenia) => {
        const usuario =   UserManager.usuarios.find((usuario) => usuario.nombreDeUsuario === nombreDeUsuario.trim());
        if(!usuario){
            console.log("El usuario no existe");
        }else if(usuario.contrasenia != this.#encriptar(contrasenia.trim())){
            console.log("La contraseña no coincide");
        }else {
            console.log("Logueado");
        }
    }
}

const userManager = new UserManager ();
userManager.crearUsuario("Juan", "Perez", "juan23", "121234");
userManager.crearUsuario("Berta", "Perez", "berti", "123434");

console.log(userManager.mostrarUsuario());