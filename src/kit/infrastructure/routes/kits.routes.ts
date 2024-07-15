import express from 'express';
import { 
    getKitsByUserIdController,
    deleteKitsController,
    addKitsController
} from '../dependencies';

const kitsrouter = express.Router();

kitsrouter.get('/:id', getKitsByUserIdController.run.bind(getKitsByUserIdController));
kitsrouter.delete('/:id', deleteKitsController.run.bind(deleteKitsController));
kitsrouter.post('/', addKitsController.run.bind(addKitsController));

export { kitsrouter };
 