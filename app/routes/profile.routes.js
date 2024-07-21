import express from 'express';
export const profileRouter = express.Router();
import { createProfile, deleteProfile } from '../controllers/profile.controller.js';
import { checkGithubHandle, checkProfile } from '../middleware/checkGithubHandle.js';

profileRouter.post('/', checkGithubHandle , createProfile);
profileRouter.delete('/:githubHandle', checkProfile, deleteProfile);

