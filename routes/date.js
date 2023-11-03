const express = require("express");
const router = express.Router();

const { getDates, getDate, createDate, deleteDate } = require("../data.js");

router.get("/", getDates);

router.post("/", createDate);

router.get("/:DateId", getDate);

router.delete("/:DateId", deleteDate);

module.exports = router;
