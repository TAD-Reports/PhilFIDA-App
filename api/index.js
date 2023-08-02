const express = require("express");
const cors = require("cors");
const corsOptions = require("../src/corsConfig/corsOptions");
const cookieParser = require("cookie-parser");
const service = require("./src/app/rest");
const credentials = require("../src/middlewares/credentials");
const app = express();

app.use(express.json());

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/", service);

module.exports = app;
