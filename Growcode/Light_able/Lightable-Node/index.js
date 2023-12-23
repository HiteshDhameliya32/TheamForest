// Configurations
require('dotenv').config();
const connectDB = require('./configs/db')
    connectDB(process.env.DB_URL)

const express = require("express");
const app = express();

// import packagies
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// import Router File & Define All Routes
const pageRouter = require('./routes/routes');
pageRouter(app);

app.listen(process.env.PORT || 8080, () => console.log(`Server running on port ${process.env.PORT}`));


