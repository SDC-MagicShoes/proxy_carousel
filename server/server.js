const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(compression());

app.use(express.static('public'));

// for server-side rendering at a later point
// const clientBundles = './public/services';
// const serverBundles = './templates/services';
// const serviceConfig = require('./service-config.json');
// const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);
//
// const React = require('react');
// const ReactDom = require('react-dom/server');
// const Layout = require('./templates/layout');
// const App = require('./templates/app');
// const Scripts = require('./templates/scripts');
//
// const renderComponents = (components, props = {}) => {
//   return Object.keys(components).map(item => {
//     let component = React.createElement(components[item], props);
//     return ReactDom.renderToString(component);
//   });
// };
//
// app.get('/shoes/:id', function(req, res) {
//   let components = renderComponents(services, {product_sku: req.params.id});
//   res.end(Layout(
//     'MagicShoes',
//     App(...components),
//     Scripts(Object.keys(services))
//   ));
// });



app.get('/:productSku/similar', (req, res) => {
  res.redirect(`http://localhost:8081/${req.params.productSku}/similar`);
});

app.listen(port, () => {
  console.log(`>>>>>>>>> listening at: http://localhost:${port}`);
});

// Legacy Code
// app.get('/:productSku/similar', (req, res) => {
//   axios.get(`http://carousel.e2jhvfkpam.us-east-1.elasticbeanstalk.com/${ req.params.productSku }/similar`)
//     .then(resp => res.status(200).send(resp.data))
//     .catch(err => res.status(500).end(err.message));
// });
//
// app.get('/:text/search', (req, res) => {
//   axios.get(`http://ec2-54-245-41-15.us-west-2.compute.amazonaws.com:3002/:text/search`)
//     .then(resp => res.status(200).send(resp.data))
//     .catch(err => res.status(500).end(err.message));
// })
//
// app.get('/:productSku/sizes', (req, res) => {
//   axios.get(`http://ec2-18-225-6-210.us-east-2.compute.amazonaws.com:3003/${ req.params.productSku }/sizes`)
//     .then(resp => res.status(200).send(resp.data))
//     .catch(err => res.status(500).end(err.message));
// });
//
// app.get('/:productSku/descrip', (req, res) => {
//   axios.get(`http://ec2-18-225-6-210.us-east-2.compute.amazonaws.com:3003/${ req.params.productSku }/descrip`)
//     .then(resp => res.status(200).send(resp.data))
//     .catch(err => res.status(500).end(err.message));
// });
//
// app.get('/:productSku/reviews', (req, res) => {
//   axios.get(`http://ec2-3-16-150-245.us-east-2.compute.amazonaws.com:3004/${ req.params.productSku }/reviews`)
//     .then(resp => res.status(200).send(resp.data))
//     .catch(err => res.status(500).end(err.message));
// });
//
// app.get('/:productSku/images', (req, res) => {
//   axios.get(`http://ec2-54-174-152-69.compute-1.amazonaws.com:3005/${ req.params.productSku }/images`)
//     .then(resp => res.status(200).send(resp.data))
//     .catch(err => res.status(500).end(err.message));
// });
//
// app.get('/:productSku/colors', (req, res) => {
//   axios.get(`http://ec2-18-232-96-48.compute-1.amazonaws.com:3006/${ req.params.productSku }/colors`)
//     .then(resp => res.status(200).send(resp.data))
//     .catch(err => res.status(500).end(err.message));
// });
//
// app.get('/:productSku/colors/:style', (req, res) => {
//   axios.get(`http://ec2-18-232-96-48.compute-1.amazonaws.com:3006/${ req.params.productSku }/colors/${ req.params.style }`)
//     .then(resp => res.status(200).send(resp.data))
//     .catch(err => res.status(500).end(err.message));
// });
