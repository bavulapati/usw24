import { Octokit } from 'octokit';
import { Profile } from '../model.js';

export const checkGithubHandle = async (req, res, next) => {
  const octokit = new Octokit();
  const { githubHandle } = req.body;
  try {
  const result = await octokit.request('GET /users/{username}', {
    username: githubHandle,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  next();
  } catch(error) {
    next(error);
  }
};

export const checkProfile = async (req, res, next) => {
  try {
    const { githubHandle } = req.params;
    if(!githubHandle) {
      return res.status(401).end('Github Handle is required');
    }
    const profile = await Profile.findOne({where: { githubHandle }});
    if(!profile) return res.status(401).end();
    next();
  } catch(error) {
    next(error);
  }
}
