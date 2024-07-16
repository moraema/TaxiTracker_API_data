import express from 'express';
import { 
    getKitsByUserIdController,
    deleteKitsController,
    addKitsController,
    updateKitsController
} from '../dependencies';

const kitsrouter = express.Router();

kitsrouter.get('/:id', getKitsByUserIdController.run.bind(getKitsByUserIdController));
kitsrouter.delete('/:id', deleteKitsController.run.bind(deleteKitsController));
kitsrouter.put('/:id', updateKitsController.run.bind(updateKitsController));
kitsrouter.post('/', addKitsController.run.bind(addKitsController));

export { kitsrouter };
 