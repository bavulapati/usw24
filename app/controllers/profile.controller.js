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
    const profile = await ProfileService.createProfile(githubHandle, markdown);
    res.json(profile);
  } catch (error) {
    return res.status(500).json({error});
  }
};

export const updateProfile = async (req, res) => {
  const { githubHandle } = req.params;
  const { markdown } = req.body;
  if(!markdown) {
    return res.status(400).end('Markdown of the user portfolio is required.');
  }
  const profile = await ProfileService.updateProfile(githubHandle, markdown);
  res.json(profile);
};

export const deleteProfile = async (req, res) => {
  const { githubHandle } = req.params;
  const profile = await ProfileService.deleteProfile(githubHandle);
  res.json(profile);
};

