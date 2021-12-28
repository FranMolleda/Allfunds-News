const mongoose = require("mongoose");
require("dotenv").config();

const dBConnect = () => {
  mongoose
    .connect(process.env.DB_MONGO_ATLAS, { useNewUrlParser: true })
    .then((x) =>
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      )
    )
    .catch((err) => console.error("Error connecting to mongo", err));
};

module.exports = dBConnect;
