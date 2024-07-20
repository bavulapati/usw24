const { Profile } = require('../model.js');

const createProfile = async (gitHubHandle, markdown) => {
  const profile = await Profile.create({
    gitHubHandle,
    markdown
  });
  return profile;
};

