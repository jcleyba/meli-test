require('dotenv').load();
const bodyParser = require('body-parser');
const Product = require('../models/product');
const axios = require('axios');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  const meliSearchUrl = `${process.env.MELI_API_URL}/items/`;

  let responseData = {
    author: {
      firstName: 'Juan Cruz',
      lastName: 'Leyba'
    }
  };

  app.get('/api/items/:id', (req, res) => {

    const uri = `${meliSearchUrl}${req.params.id}`;

    const requestProduct = axios.get(uri);

    const requestDescription = axios.get(`${uri}/description`);

    Promise.all([requestProduct, requestDescription]).then(
      (values) => {
        responseData.item = new Product(values[0].data);
        responseData.item.setDescription(values[1].data);
        res.json({'responseCode': 1, 'responseDesc': 'Success', 'data': responseData});
      })
      .catch(error => {
        next();
      });
  });
};
