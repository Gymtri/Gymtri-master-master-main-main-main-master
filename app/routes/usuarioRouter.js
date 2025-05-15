const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/cadastro", (req, res) => {
    res.render("pages/cadastro", {
        avisoErro: {},
        valores: {},
        falha: null
    });
});

router.post("/cadastro", usuarioController.validacaoFormularioCadastro, (req, res)=>{
    usuarioController.inserirUsuario(req, res)
});

module.exports = router;
