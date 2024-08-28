const db = [];
const usuario_controller = require("./usuario"); // Corrigir de acordo com o nome correto
let nextId = 1;

const model = (rede, id = nextId++) => {
  if (
    rede.nome != undefined &&
    rede.nome != "" &&
    usuario_controller.show(rede.usuario_id)
  ) {
    return {
      id,
      rede: rede.nome,
      id_usuario: rede.usuario_id,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    db.push(novo);
    return 201;
  }

  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);

  if (index != -1) {
    db.splice(index, 1);
  }
};

module.exports = {
  destroy,
  store,
  show,
  index,
  update,
};