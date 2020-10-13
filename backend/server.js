var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
const routes = require('./routes/menu');

// Connect to MongoDB database
const USERNAME = 'admin';
const PASSWORD = 'test1234';
const DBNAME = 'SmartRestaurant';
// `mongodb+srv://${USERNAME}:${PASSWORD}@smartrestaurant-lporg.gcp.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
mongoose
  .connect(`mongodb://${USERNAME}:${PASSWORD}@localhost/${DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();

    app.use(express.urlencoded());
    app.use(cors());

    app.use('/api', routes);

    app.listen(3000, () => {
      console.log('Server has started!');
    });
  });
