import express from 'express';
import { 
    getAllKitsController,
    deleteKitsController,
    addKitsController
} from '../dependencies';

const kitsrouter = express.Router();

kitsrouter.get('/', getAllKitsController.run.bind(getAllKitsController));
kitsrouter.delete('/:id', deleteKitsController.run.bind(deleteKitsController));
kitsrouter.post('/', addKitsController.run.bind(addKitsController));

export { kitsrouter };
 