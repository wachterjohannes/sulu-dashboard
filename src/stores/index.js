import GithubStore from './Github';

const TOKEN = process.env.TOKEN || null;
const ORGANIZATION_NAME = 'sulu';

const githubStore = new GithubStore(TOKEN, ORGANIZATION_NAME);

export {githubStore};
