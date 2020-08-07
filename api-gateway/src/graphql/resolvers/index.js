const authResolver = require('./auth');
const scenesResolver = require('./scenes');
const bookingResolver = require('./booking');

const rootResolver = {
  ...authResolver,
  ...scenesResolver,
  ...bookingResolver
};

module.exports = rootResolver;
