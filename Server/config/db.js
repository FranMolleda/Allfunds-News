const mongoose = require("mongoose");
require("dotenv").config();

const dBConnect = () => {
  mongoose
    // .connect(
    //   "mongodb+srv://FranMolleda:bCBroqEBO3HgtI2o@cluster0.wqftk.mongodb.net/news?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    //   { useNewUrlParser: true }
    // )
    .connect("mongodb://localhost/news", { useNewUrlParser: true })
    .then((x) =>
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      )
    )
    .catch((err) => console.error("Error connecting to mongo", err));
};

module.exports = dBConnect;
