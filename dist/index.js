"use strict";
const express = require("express");
const Router = require("./src/routes/router");
require("./db-connection");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);
app.listen(3000, () => {
    console.log("Server is running");
});
