const express = require('express');
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