const express = require('express')
bodyParser = require('body-parser')
cors = require('cors')
massive = require('massive')
require('dotenv').config()
const pController = require('./products_controller.js')

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.post('/api/product', pController.create);
app.get('/api/products', pController.getAll);
app.get('/api/product/:id', pController.getOne);
app.put('/api/product/:id', pController.update);
app.delete('/api/product/:id', pController.delete);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}.`) })