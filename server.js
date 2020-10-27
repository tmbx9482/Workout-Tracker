//require npm packages: express, mongoose, and morgan
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// Set up Express app and create port
const app = express();
const PORT = process.env.PORT || 3000;

// Morgan App 
app.use(morgan("dev"));

// Express middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// dbmongo creating a mongoose connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// require routes
var htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

var apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);

var workoutRoutes = require("./models/workout")
app.use(workoutRoutes)

// listen on port
app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});