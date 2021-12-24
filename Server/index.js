const express = require("express");
const dBConnect = require("./config/db");
const cors = require("cors");
const app = express();

dBConnect();

app.use(cors());

app.use(express.json({ extended: true }));

const port = process.env.PORT || 4000;

app.use("/news", require("./routes/news"));
app.use("/archives", require("./routes/archives"));

app.listen(port, () => {
  console.log(`Server is running in Port ${port}`);
});
