const noteRoutes = require('./node_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  // could put more routes here in future
};
