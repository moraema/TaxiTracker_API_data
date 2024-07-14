import express from 'express';
import { 
    getDailyRatingsByDriver 
} from '../dependencies';


const graphicsroutes = express.Router();

graphicsroutes.get('/ratings/:driver_id/:date', getDailyRatingsByDriver.run.bind(getDailyRatingsByDriver))


export { graphicsroutes }