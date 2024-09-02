const barbearia_controller = require("./barbearia"); // Corrigir de acordo com o nome correto
let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    body.foto != "" &&
    body.foto != undefined &&
    body.bio != undefined &&
    body.bio != "" &&
    barbearia_controller.show(body.barbearia_id)
  ) {
    return {
      id,
      nome: body.nome,
      foto: body.foto,
      bio: body.bio,
      id_barbearia: body.barbearia_id,
    };
  }
};

module.exports = model