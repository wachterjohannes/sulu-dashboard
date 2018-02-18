import GithubStore from './Github';
import SlackStore from './Slack';
import env from '../../env';

const GITHUB_TOKEN = env.GITHUB_TOKEN || null;
const GITHUB_ORGANIZATION_NAME = env.GITHUB_ORGANIZATION_NAME;
const githubStore = new GithubStore(GITHUB_TOKEN, GITHUB_ORGANIZATION_NAME);

const SLACK_TOKEN = env.SLACK_TOKEN || null;
const slackStore = new SlackStore(SLACK_TOKEN);

export {githubStore, slackStore};
