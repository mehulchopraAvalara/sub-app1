/* eslint-env node */
'use strict';

module.exports = function(environment/* , appConfig */) {
  const ENV = {
    modulePrefix: 'sub-app1',
    environment,
  }
  return ENV;
};
