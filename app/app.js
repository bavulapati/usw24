import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './model.js';

export const app = express();

app.use(bodyParser.json());
app.set('sequelize', sequelize)
app.set('models', sequelize.models)

import { profileRouter } from './routes/profile.routes.js';

app.use('/profiles', profileRouter);

