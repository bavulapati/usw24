const { Octokit } = require('octokit');

const checkGithubHandle = async (req, res, next) => {
  const octokit = new Octokit();
  const { githubHandle } = req.body;

  await octokit.request('GET /users/{username}', {
    username: githubHandle,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
};
