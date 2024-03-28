const express=require('express');
const router=express.Router();
const {signup, Login} = require("../Controller/userController")

router.post("/signup", signup)
router.post("/login",Login)

module.exports = router;