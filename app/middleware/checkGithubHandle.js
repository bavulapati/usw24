import { Octokit } from 'octokit';

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
    console.error(`Error! Status: ${error.status} Message: ${error.response.data.message}`);
    res.send(401, 'Unable to find the github handle');
  }
};
