let nextId = 1;
const rede_controller = require("../controllers/rede.js")

const model = (body, id = nextId++) => {

    let enderecover = true
    if (body.endereco.cep != undefined &&
        body.endereco.lograudouro != undefined &&
        body.endereco.bairro != undefined &&
        body.endereco.numero != undefined ) {
            enderecover = true
        } else {
            enderecover = false
        }
        
  if (
    body.nome != undefined &&
    body.fotos != undefined &&
    body.nome != "" &&
    body.fotos != "" &&
    enderecover &&
    rede_controller.show(body.rede_id)
  ) {
    return {
      nome: body.nome,
      fotos: body.fotos,
      endereco: {
        cep: body.endereco.cep,
        lograudouro: body.endereco.lograudouro,
        bairro: body.endereco.bairro,
        numero: body.endereco.numero,
        complemento: body.endereco.complemento
      },
      rede_id: body.rede_id
    };
  }
};

module.exports = model;
