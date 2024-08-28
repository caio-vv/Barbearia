# Barbearia

Atendimento: - servicos: [{
    servico_id,
    nota
 }]
 - cliente_id
 - horario_inicio
 - horario_fim (computado)
 - preco (computado)
 - status_pagamento

Servico:
  - nome
  - preco
  - barbeiro_id
  - duracao_minutos

Cliente:
 - nome
 - telefone
 - email
 - senha?

Barbeiro:
 - nome,
 - foto,
 - bio,
 - barbearia_id


Consumir da api https://viacep.com.br  e criar Middleware que transforma CEP em endereço

Barbearia:
 - nome,
 - fotos,
 - endereco: {
    cep,
    lograudouro,
    bairro,
    numero,
    complemento?,
    coordenadas: {
        latitude,
        longitude,  
    }
 },
 - rede_id

 Rede:
  - nome
  - usuario_id

Usuario:
 - email
 - senha