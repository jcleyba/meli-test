require('dotenv').load();
const bodyParser = require('body-parser');
const axios = require('axios');
const Product = require('../models/product');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  let responseData = {
    author: {
      firstName: 'Juan Cruz',
      lastName: 'Leyba'
    }
  };
  const meliSearchUrl = `${process.env.MELI_API_URL}/sites/MLA/search?q=`;

  app.get('/api/items', (req, res, next) => {

    axios.get(`${meliSearchUrl}${req.query.q}`).then(response => {

      const items = response.data.results.map(item => {
        return new Product(item);
      });

      const limit = req.query.limit && `${req.query.limit}`;

      responseData.items = limit ? items.slice(0, limit) : items;
      responseData.filters = response.data.filters;

      res.json({'responseCode': 1, 'responseDesc': 'Success', 'data': responseData});
    })
      .catch(() => {
        next();
      });

  });
};
