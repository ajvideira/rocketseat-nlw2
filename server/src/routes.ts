import express from 'express';

const routes = express.Router();

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (RequestBody): Dados para criação ou atualização de um registro
//Route/Path Params: Identificar qual recurso será atualzado ou deletado
//Query Param: Paginação, filtros, ordenação, etc... 

routes.post('/classes', (request, response) => {
    const data = request.body;

    console.log(data);

    return response.send();
});

export default routes;