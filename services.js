const GithubBuild = require('github-build');
const Pushover = require('pushover-notifications');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const PUSHOVER_API_TOKEN = process.env.PUSHOVER_API_TOKEN;
const PUSHOVER_USER_TOKEN = process.env.PUSHOVER_USER_TOKEN;

exports.github = async (buildData) => {

  const githubBuild = new GithubBuild({
	repo: buildData.repo,
	sha: buildData.sha,
	token: GITHUB_TOKEN,
	label: 'Cloud Build',
	description: buildData.project,
	url: buildData.url
  });

  switch (buildData.status) {
	case 'QUEUED':
	case 'WORKING':
	  githubBuild.start();
	  break;
	case 'INTERNAL_ERROR':
	case 'TIMEOUT':
	  githubBuild.error();
	  break;
	case 'FAILURE':
	  githubBuild.fail();
	  break;
	case 'SUCCESS':
	  githubBuild.pass();
	  break;
  }

};

exports.pushover = async (buildData) => {

  const pushover = new Pushover({
	token: PUSHOVER_API_TOKEN
  });

  const users = PUSHOVER_USER_TOKEN.split(';');

  const msg = {
    title: `${buildData.project}`,
	message: `${buildData.repo} => ${buildData.status}`,
	url: buildData.url,
	url_title: buildData.build
  };

  switch (buildData.status) {
	case 'QUEUED':
	case 'WORKING':
	  msg.priority = -2;
	  break;
	case 'INTERNAL_ERROR':
	case 'TIMEOUT':
	  msg.priority = 1;
	  break;
	case 'FAILURE':
	  msg.priority = 1;
	  break;
	case 'SUCCESS':
	  msg.priority = -1;
	  break;
  }

  users.forEach((user) => {
    msg.user = user;
    pushover.send(msg, (err, res) => {
      if (err) {
        console.error('err');
	  }
      console.log(res);
	});
  });

};