import { Profile } from '../model.js';
import fs from 'node:fs/promises';
import path from 'path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'url';

export const createProfile = async (githubHandle, markdown, uuid, domain) => {
  const profile = await Profile.create({
    githubHandle,
    markdown,
    uuid,
    domain
  });

  return {
    githubHandle: profile.githubHandle,
    domain: profile.domain
  };
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

export const findProfile = async (githubHandle) => {
  return await Profile.findOne({ where: { githubHandle: githubHandle }});
}

export const kraftDeploy = async (markdown) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  await fs.writeFile(path.resolve(__dirname, '..', '..', 'deployment-template', 'doc', 'index.html'), markdown);

  const kraftContext = path.resolve(__dirname, '..', '..', 'deployment-template');
  const response = execSync(`cd ${kraftContext} && kraft cloud deploy --log-level error --log-type json -p 443:8085 -M 256 .`).toString();

  return { "uuid": response.match(/uuid:\s*([a-f0-9-]+)/i)[1], "domain": response.match(/domain:\s*(https?:\/\/[^\s]+)/i)[1]};
}

export const kraftRemoveInstance = (uuid) => {
  const response = execSync(`kraft cloud instance remove ${uuid}`).toString();

  return response;
}
