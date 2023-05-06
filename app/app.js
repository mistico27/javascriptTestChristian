const express = require("express");
const morgan = require("morgan");
const {globalErroHandler, notFoundError} = require('../middlewares/globalErroHandler');
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json()); //pass incoming json data

//Routes
//admin register
app.use("/api/v1/admins", adminRouter);

////Error Middleware
app.use(notFoundError)
app.use(globalErroHandler);



module.exports = app;
