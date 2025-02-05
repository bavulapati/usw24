import * as ProfileService from '../services/profile.service.js';

export const createProfile = async (req, res) => {
  try {
    const { githubHandle } = req.body;
    if(!githubHandle) {
      return res.status(400).end('Github handle of the user is required.');
    }
    const existingProfile = await ProfileService.findProfile(githubHandle);
    if(existingProfile) {
      return res.status(409).end('The user with the github handle already exist.');
    }
    const { markdown } = req.body;
    if(!markdown) {
      return res.status(400).end('Markdown of the user portfolio is required.');
    }
    const cloudContext = await ProfileService.kraftDeploy(markdown);
    if (!cloudContext || !cloudContext.uuid | !cloudContext.domain) {
      throw new Error('Kraft Deploy did not succeed');
    }
    const profile = await ProfileService.createProfile(githubHandle, markdown, cloudContext.uuid, cloudContext.domain);
    res.json(profile);
  } catch (error) {
    return res.status(500).json({error});
  }
};

export const deleteProfile = async (req, res) => {
  const { githubHandle } = req.params;
  const profile = await ProfileService.findProfile(githubHandle);
  const removeResponse = ProfileService.kraftRemoveInstance(profile.uuid);
  const deleteResponse = await ProfileService.deleteProfile(githubHandle);
  if (!deleteResponse) {
    return res.status(500).end("Could not delete the profile");
  }
  return res.json({"messsage": "Removed instance"});
};

