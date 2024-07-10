import express from 'express';
import { 
    getDrivingController,
    getDrivingByDriverIdController,
    getDrivingByKitsIdController
 } from '../dependencies';

 const drivingRouter = express.Router();

 drivingRouter.get('/', getDrivingController.run.bind(getDrivingController));
 drivingRouter.get('/driver/:id', getDrivingByDriverIdController.run.bind(getDrivingByDriverIdController));
 drivingRouter.get('/kits/:id', getDrivingByKitsIdController.run.bind(getDrivingByKitsIdController));


 export { drivingRouter }