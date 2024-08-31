const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/*const corsOptions = {
  origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));*/

app.use(cors());
app.use(express.json());

const db = require("./model");
db.sequelize.sync();

// Import and use the gas route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const gasRoute = require('./route/gas.route.js');
const fanRoute = require('./route/fan.route.js');
app.use(gasRoute);
app.use(fanRoute);

const server = app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`);
});

