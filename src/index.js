const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://wirecard_api:1a2b3c@wc-shard-00-00-qtibg.mongodb.net:27017,wc-shard-00-01-qtibg.mongodb.net:27017,wc-shard-00-02-qtibg.mongodb.net:27017/test?ssl=true&replicaSet=WC-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(express.json());
app.use(routes);

app.listen(3000);