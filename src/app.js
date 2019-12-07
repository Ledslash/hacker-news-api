import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();
app.use(helmet())
app.use(bodyParser.json());

export default app;