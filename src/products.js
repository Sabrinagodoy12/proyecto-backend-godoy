// class productsManager {
//     static products = [];
//     #crypto;
//     #algorithn;
//     #key;
//     #vi;

//     constructor(){
//         this.#crypto = require("crypto");
//         this.#algorithn = "AES-128-CBC";
//         this.#key = "misProductoSelec";
//         this.#vi = this.#crypto.randomBytes(16);
//     }
//     encriptar = (texto) => {
//         const cifrador = this.#crypto.createCipheriv(this.#algorithn, this.#key, this.#vi);

//         let textoEncriptado = cifrador.update(texto, "utf8", "hex");
//         textoEncriptado = cifrador.final("hex");

//         return textoEncriptado
//     }
// }
const generateId = () => {
    const number = Math.floor(Math.random()* 100000);
    const albs = [...'abcdefghijklmnopqrstuvwxyz'];
    let stringPart = '';

    for( let i=0; i<10; i++){
        const index = randomIndex(25);
        stringPart += albs[index]
    }
    const id = stringPart+number;
    return id;
}
const randomIndex = (maxNumber) => {
    return Math.floor(Math.random()*maxNumber)
}

const products = [
    {
        id: generateId(),
        title: "Taza rosa",
        description: "Taza de cerámica brillante",
        price: 3400,
        code: "taza12",
        status: "True",
        category: "Tazas",
    },
    {
        id:generateId(),
        title: "Taza con dibujo",
        description: "Taza de cerámica con dibujo impreso",
        price: 3400,
        code: "taza13",
        status: "True",
        category: "Tazas",
    },
    {
        id:generateId(),
        title: "Bowl",
        description: "Bowl de cerámica tamaño grande",
        price: 4500,
        code: "bowl12",
        status: "True",
        category: "Bowls",
    },
    {
        id:generateId(),
        title: "Plato marrón",
        description: "Plato de cerámica playo grande",
        price: 6000,
        code: "plato12",
        status: "True",
        category: "Platos",
    }
];
export default products;