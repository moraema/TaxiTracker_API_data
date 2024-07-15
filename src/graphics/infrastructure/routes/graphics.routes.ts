import express from 'express';
import { 
    getDailyRatingsByDriverController,
    getTravelsByDriverDistanceController 
} from '../dependencies';


const graphicsroutes = express.Router();

graphicsroutes.get('/ratings/:driver_id/:date', getDailyRatingsByDriverController.run.bind(getDailyRatingsByDriverController));
graphicsroutes.get('/distance/:driver_id', getTravelsByDriverDistanceController.run.bind(getTravelsByDriverDistanceController));


export { graphicsroutes }