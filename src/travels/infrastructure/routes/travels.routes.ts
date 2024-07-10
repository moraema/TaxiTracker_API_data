import express from 'express';
import { 
    getTravelsByDriverIdController,
    getAllDriverDataIdController
} from '../dependencies';

const travelsRouter = express.Router();

travelsRouter.get('/:id', getTravelsByDriverIdController.run.bind(getTravelsByDriverIdController));
travelsRouter.get('/data/:id', getAllDriverDataIdController.run.bind(getAllDriverDataIdController));


export { travelsRouter }