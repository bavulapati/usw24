import { Profile } from '../model.js';

export const createProfile = async (githubHandle, markdown) => {
  const profile = await Profile.create({
    githubHandle,
    markdown
  });
  return profile;
};

export const updateProfile = async (githubHandle, markdown) => {
  return await Profile.update(
    { markdown: markdown },
    { where: { githubHandle: githubHandle } }
  );
};

export const deleteProfile = async (githubHandle) => {
  return await Profile.destroy({ where: { githubHandle: githubHandle }});
};

