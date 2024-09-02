const express = require("express");
const barbearia_controller = require("../controllers/barbearia.js");
const router = express.Router();


router.get("/barbearia", (req, res) => {
    res.json(barbearia_controller.index())
})

router.get("/barbearia/:id", (req, res) => {
    res.json(barbearia_controller.show(req.params.id))
})

router.post("/barbearia", cep_endereco, (req, res) => {
    const code = barbearia_controller.store(req.body)
    res.status(code).json()
})

router.put("/barbearia/:id", cep_endereco, (req, res) => {
    const code = barbearia_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/barbearia/:id", (req, res) => {
    barbearia_controller.destroy(req.params.id)
    res.json()
})

module.exports = router