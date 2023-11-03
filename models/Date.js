const mongoose = require("mongoose");

const DateSchema = new mongoose.Schema({
  date: Object,
  indexJeu: Object,
});

const Date = mongoose.model("Date", DateSchema);

module.exports = Date;
