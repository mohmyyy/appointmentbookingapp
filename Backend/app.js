const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/users");

const cors = require("cors");
const app = express();
app.use(cors());

const sequelize = require("../Backend/util/database");

const userRoutes = require("../Backend/routes/user");
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", userRoutes);

sequelize
  .sync()
  .then((result) => {
    // console.log(Result);
    app.listen(3000);
  })
  .catch((error) => console.log(error));
