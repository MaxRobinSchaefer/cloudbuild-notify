const services = require('./services');

const SERVICES = process.env.SERVICES;

exports.cloudbuildNotify = async (event, callback) => {

  try {

    const build = JSON.parse(new Buffer(event.data, 'base64').toString());

    const buildData = {
      project: build.sourceProvenance.resolvedRepoSource.projectId,
	  repo: build.sourceProvenance.resolvedRepoSource.repoName.split('_').splice(1, 2).join('/'),
	  sha: build.sourceProvenance.resolvedRepoSource.commitSha,
	  build: build.buildTriggerId,
	  url: build.logUrl,
	  status: build.status
	};

    const triggerServices = SERVICES.toLowerCase().split(';');

    if (triggerServices.includes('github')) {
	  await services.github(buildData);
	}

    if (triggerServices.includes('pushover')) {
      await services.pushover(buildData);
	}

  } catch (e) {
    console.error(e);
  }

};