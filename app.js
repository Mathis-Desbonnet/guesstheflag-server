const express = require("express");
const mongoose = require("mongoose");
const app = express();
const date_routes = require("./routes/date.js");
const date = require("./data.js");
const cors = require("cors");

require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://MathisDesAdmin:Hkfxq8hRQx2wSzLy@guesstheflag.e7ol3xc.mongodb.net/guesstheflag?retryWrites=true&w=majority"
  )
  .then((result) => app.listen(5000))
  .catch((err) => console.log(Error));

app.use(cors());
app.use(express.json());
app.use("/api/date", date_routes);
