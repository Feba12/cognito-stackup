const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.render("index",{name:'john'})
})
router.get("/signup",(req,res) => {
    res.send("Hello from signup");
})
router.get("/signin",(req,res) => {
    res.send("Hello from signin");
})
router.get("/cart",(req,res) => {
    res.send("Hello from cart");
})

module.exports = router