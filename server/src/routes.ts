import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (RequestBody): Dados para criação ou atualização de um registro
//Route/Path Params: Identificar qual recurso será atualzado ou deletado
//Query Param: Paginação, filtros, ordenação, etc... 

const classesController = new ClassesController();
const connectionsControler = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsControler.index);
routes.post('/connections', connectionsControler.create);

export default routes;