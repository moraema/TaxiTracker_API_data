import express from 'express';
import { 
    getDriverByKitIdController,
    addDriverController,
    deleteDriverController,
    updateDriverController
 } from '../dependencies';

const driverRouter = express.Router();

driverRouter.get('/:id', getDriverByKitIdController.run.bind(getDriverByKitIdController));
driverRouter.post('/', addDriverController.run.bind(addDriverController));
driverRouter.put('/:id', updateDriverController.run.bind(updateDriverController));
driverRouter.delete('/:id', deleteDriverController.run.bind(deleteDriverController));


export { driverRouter }
