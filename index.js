'use strict';

let express = require('express');
let consolidate = require('consolidate');

let app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);
