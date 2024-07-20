import * as ProfileService from '../services/profile.service.js';

export const createProfile = async (req, res) => {
  try {
    const { githubHandle } = req.body;
    if(!githubHandle) {
      return res.status(400).end('Github handle of the user is required.');
    }
    const { markdown } = req.body;
    if(!markdown) {
      return res.status(400).end('Markdown of the user portfolio is required.');
    }
    const createdProfile = await ProfileService.createProfile(githubHandle, markdown);
    res.json(createdProfile);
  } catch (error) {
    return res.status(500).json({error});
  }
};

