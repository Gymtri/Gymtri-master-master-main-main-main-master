const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");


router.get("/", (req, res) => {
     res.render("pages/cadastro", {
        avisoErro: {},
        valores: {},
        falha: null
    });
});

router.post("/cadastro",  (req, res)=>{
    console.log("Testes");
    req.body.email = "mvarjona@gmail.com"
    req.body.senha = "12345abc@@"
    req.body.fuAluno = "Marcelo"
    req.body.user = "Marelo"
    
    usuarioController.inserirUsuario(req, res)
});

module.exports = router;


