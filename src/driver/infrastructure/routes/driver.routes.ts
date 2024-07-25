import express from 'express';
import { 
    getDriverByKitIdController,
    addDriverController,
    deleteDriverController,
    updateDriverController,
    getDriverIdController,
    getStatsByDriverIdController
 } from '../dependencies';
import { upload } from '../../application/service/multer';
const driverRouter = express.Router();

driverRouter.get('/kit/:id', getDriverByKitIdController.run.bind(getDriverByKitIdController));
driverRouter.get('/:driver_id', getDriverIdController.run.bind(getDriverIdController));
driverRouter.post('/',  upload.single('image'), addDriverController.run.bind(addDriverController));
driverRouter.patch('/:id', upload.single('image'), updateDriverController.run.bind(updateDriverController));
driverRouter.delete('/:id', deleteDriverController.run.bind(deleteDriverController));
driverRouter.get('/stats/:driver_id', getStatsByDriverIdController.run.bind(getStatsByDriverIdController));

export { driverRouter }
