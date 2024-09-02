const usuario_controller = require("./usuario"); // Corrigir de acordo com o nome correto
let nextId = 1;

const model = (rede, id = nextId++) => {
  if (
    rede.nome != undefined &&
    rede.nome != "" &&
    usuario_controller.show(body.usuario_id)
  ) {
    return {
      id,
      rede: rede.nome,
      id_usuario: body.usuario_id,
    };
  }
};

module.exports = model