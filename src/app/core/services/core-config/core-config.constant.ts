let secure = require('./secure.json');

export const coreConfigConstant: ICoreConfigConstant = {
  // API_URL: 'http://localhost:9000/',
  API_URL: 'http://api.tutorialjs.lsoftwaresolutions.com/',
  MASTER_KEY: secure.MASTER_KEY,
  URL: 'http://tutorialjs.lsoftwaresolutions.com/#/'
};
