const barbeiro_controller = require("./barbeiro"); // Corrigir de acordo com o nome correto
let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    body.preco != "" &&
    body.preco != undefined &&
    body.duracao_minutos != undefined &&
    body.duracao_minutos != "" &&
    barbeiro_controller.show(body.barbeiro_id)
  ) {
    return {
      id,
      nome: body.nome,
      preco: body.preco,
      duracao_minutos: body.duracao_minutos,
      id_barbeiro: body.barbeiro_id,
    };
  }
};

module.exports = model