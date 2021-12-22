const mongoose = require("mongoose");
require("dotenv").config();

const dBConnect = () => {
  mongoose
    .connect("mongodb://localhost/news", { useNewUrlParser: true })
    .then((x) =>
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      )
    )
    .catch((err) => console.error("Error connecting to mongo", err));
};

module.exports = dBConnect;
