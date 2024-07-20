import express from 'express';
export const profileRouter = express.Router();
import { createProfile } from '../controllers/profile.controller.js';
import { checkGithubHandle } from '../middleware/checkGithubHandle.js';

profileRouter.post('/', checkGithubHandle , createProfile);
profileRouter.get('/', (req, res) => {
  res.json({ "message": "hello world"});
});

