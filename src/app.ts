import express, { Express } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors)
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static('public'));

export default app;