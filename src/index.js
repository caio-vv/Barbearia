const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco")
const app = express()
const port = 5000

app.use(express.json())

app.post("/barbearia", cep_endereco, (req, res) => {
    res.json(req.body)
})

app.listen(port, () => {
    console.log("servidor rodando")
})