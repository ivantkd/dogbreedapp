const express = require('express');
const path = require("path");
const app = express();
/*const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');*/
const mongoose = require('mongoose');
const PORT = 8080;

const middleware = require('./middleware');
require('./src/database');



app.get('/', (req, res) => {
    res.send("Hello World ! ");
});

const bodyParser = require('body-parser');

// Routes
const apidogRouter = require('./src/routes/apidog.router');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/apidog', apidogRouter);



// will redirect all the non-api routes to react frontend
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");
// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function(req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});

app.use(middleware.handleHeaders);

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

