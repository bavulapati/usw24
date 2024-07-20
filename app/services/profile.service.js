import { Profile } from '../model.js';

export const createProfile = async (githubHandle, markdown) => {
  const profile = await Profile.create({
    githubHandle,
    markdown
  });
  return profile;
};

