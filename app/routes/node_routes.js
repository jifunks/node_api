module.exports = function(app, db) {
// in Express, routes are wrapped in a function which takes Express instance and database as arguments
  app.post('/notes', (req, res) => {
    // create note here
    res.send('Hello');
  });
};
