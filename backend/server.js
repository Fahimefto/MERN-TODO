require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoute = require("./routes/todo");

// express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/todos", todoRoute);

//server run
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected DB & listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
