const express = require('express');
const path = require("path");
const app = express();
const PORT = 8080;
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


app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

// will redirect all the non-api routes to react frontend
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");
// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function(req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});