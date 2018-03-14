require('dotenv').config()
require("./lib/socket-io");

const path = require('path');
const express = require('express')
const line = require('@line/bot-sdk')

const handler = require('./handler')
const config = require('./config.js')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/barista', (req, res, next) => {
  res.render("barista");
});
app.post('/webhook', line.middleware(config), handler.webhook);

app.listen(process.env.PORT || 3000);
