import { Router } from "express";

const router = Router();
const products = [];

router.get("/", (req, res) => {
    res.status(200).send({state: "success", data: products});
});

router.get("/api/products/:id", ( req, res) => {
    const { id } = req.params;
    const product = products.find((item) => item.id === Number(id));

        if(!product){
            return res.status(400).send({"Error": "no se encontró ningún producto"});
    }
   res.status(200).send({data: product});
    }
);

router.post("/", (req, res) => {
    const {id, title, description, code, price, status, stock, category, thumbnails} = req.body;
    const newProduct = {id: Number(id), title, description, code, price, status, stock, category, thumbnails}

    users.push(newProduct);

    res.status(201).redirect("http://localhost:8080/public/") ;
});

router.delete("/api/products/:id", ( req, res) => {
    const {id} = req.params;
    const indice = products.findIndex((item) => item.id === Number(id));

    if(indice < 0){
        return res.status(400).send({"Error": "no se encontró ningún producto"});
    }
    products.splice(indice, 1);
    res.status(200).send({data: "Producto eliminado"});
});

export default router;
