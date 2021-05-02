import { create } from './http-client';

const gistClient = create({
  // TODO put to env variables/config
  // https://nextjs.org/docs/basic-features/environment-variables
  // https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
  baseURL: 'https://gist.githubusercontent.com/kevinlaihk01',
});

export default gistClient;
