
const path = require('path');



module.exports = (app) => {
  ent

  app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/tables.html'));
  });

  app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/reserve.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
