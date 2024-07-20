const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./model')
const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize)
app.set('models', sequelize.models)

const profileRoutes = require('./routes/profile.routes.js');

app.use('/profiles', profileRoutes);

module.exports = app;
