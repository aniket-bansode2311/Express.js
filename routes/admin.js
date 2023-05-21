const express = require("express");
const path = require('path');
const router = express.Router();

router.get("/add-course", (req, res, next) => {
    res.send(path.join(__dirname,"../","files","add-course.html"));
});         //get method

router.post("/add-course", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});         //post method

module.exports = router;