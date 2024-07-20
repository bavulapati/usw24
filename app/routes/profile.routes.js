import express from 'express';
export const profileRouter = express.Router();
import { createProfile, updateProfile, deleteProfile } from '../controllers/profile.controller.js';
import { checkGithubHandle, checkProfile } from '../middleware/checkGithubHandle.js';

profileRouter.post('/', checkGithubHandle , createProfile);
profileRouter.get('/', (req, res) => {
  res.json({ "message": "hello world"});
});
profileRouter.put('/:githubHandle', checkProfile, updateProfile);
profileRouter.delete('/:githubHandle', checkProfile, deleteProfile);

