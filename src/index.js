const express = require("express");
const cep_endereco = require("./middlewares/cep_endereco.js");
const barbearia_router = require("./routes/barbearia.js");
const usuario_router = require("./routes/usuario.js");
const cliente_router = require("./routes/cliente.js");
const atendimento_router = require("./routes/atendimento.js");
const rede_router = require("./routes/rede.js");
const servico_router = require("./routes/servico.js");
const barbeiro_router = require("./routes/barbeiro.js");
const app = express();
const port = 5000;
// app.use(cep_endereco) // Midleware de uso global

app.use(express.json());

//cliente

app.use("/cliente", cliente_router);

// barbearia

app.use("/barbearia", barbearia_router);

//usuario

app.use("/usuario", usuario_router);

//barbeiro

app.use("/barbeiro", barbeiro_router);

//servico

app.use("/servico", servico_router);

//rede

app.use("/rede", rede_router);

//atendimento

app.use("/atendimento", atendimento_router);

app.listen(port, () => {
  console.log(`Server running in ${port} port`);
});
