import express from 'express';
import { 
    addStarsController,
    getByIdStarsController
 } from '../dependencies';

 const starsRouter = express.Router();

 starsRouter.post('/', addStarsController.run.bind(addStarsController));
 starsRouter.get('/:id', getByIdStarsController.run.bind(getByIdStarsController));


 export { starsRouter }