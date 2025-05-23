const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", (req, res) => {
     res.render("pages/cadastro", {
        avisoErro: {},
        valores: {},
        falha: null
    });
})

router.get("/cadastro", (req, res) => {
    res.render("pages/cadastro", {
        avisoErro: {},
        valores: {},
        falha: null
    });
});

router.post("/cadastro", usuarioController.validacaoFormularioCadastro, (req, res)=>{
    console("Testes");
    usuarioController.inserirUsuario(req, res)
});

module.exports = router;
