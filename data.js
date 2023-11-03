const Date = require("./models/Date.js");

const getDates = (req, res) => {
  Date.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getDate = (req, res) => {
  Date.findOne({ _id: req.params.DateId })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Product not found" }));
};

const createDate = (req, res) => {
  Date.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const deleteDate = (req, res) => {
  Date.findOneAndDelete({ date: req.params.DateId })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Product not found" }));
};

module.exports = { getDates, getDate, createDate, deleteDate };
