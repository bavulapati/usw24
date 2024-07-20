const express = require('express');
const profileRouter = express.Router();
const { createProfile } = require('../controllers/profile.controller');
const { checkGithubHandle } = require('../middleware/checkGithubHandle');

profileRouter.post('/', checkGithubHandle , createProfile);

module.exports = profileRouter;
