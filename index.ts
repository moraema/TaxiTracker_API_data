import express from 'express';
import cors from 'cors';
import { dbmysql } from './src/database/application/mysql';
import { kitsrouter } from './src/kit/infrastructure/routes/kits.routes';
import { driverRouter } from './src/driver/infrastructure/routes/driver.routes';
import { starsRouter } from './src/stars/infrastructure/routes/stars.routes';
import { drivingRouter } from './src/driving/infrastructure/routes/driving.routes';
import { travelsRouter } from './src/travels/infrastructure/routes/travels.routes';

const app = express();

const PORT = process.env.PORT;

let corsOptions = {
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Origin",
            "Accept",
            "X-Requested-With",
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Headers",
            "Access-Control-Allow-Methods",
        ],
};


app.use(cors(corsOptions));
app.use(express.json());

app.use('/drivers', driverRouter);
app.use('/drivings', drivingRouter);
app.use('/kits', kitsrouter);
app.use('/stars', starsRouter);
app.use('/travels', travelsRouter);



dbmysql.connect()
.then(() => console.log("Database connected"))
.catch((err) => console.error("Error connecting to database: " + err));


app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})