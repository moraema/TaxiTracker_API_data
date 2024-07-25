import express from 'express';
import { 
    getKitsByUserIdController,
    deleteKitsController,
    addKitsController,
    updateKitsController,
    updateKitsUserIdController,
    getKitsIdController
} from '../dependencies';

const kitsrouter = express.Router();

kitsrouter.get('/user/:id', getKitsByUserIdController.run.bind(getKitsByUserIdController));
kitsrouter.get('/:kit_id', getKitsIdController.run.bind(getKitsIdController));
kitsrouter.delete('/:id', deleteKitsController.run.bind(deleteKitsController));
kitsrouter.put('/data/:kit_id', updateKitsController.run.bind(updateKitsController));
kitsrouter.put('/user/:kit_id', updateKitsUserIdController.run.bind(updateKitsUserIdController));
kitsrouter.post('/', addKitsController.run.bind(addKitsController));

export { kitsrouter };
 