const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require('bcrypt');

// const user=require(u)

router.get("/", async (req, res) => {
    return res.send("hello")
    return console.log("welcome to the server");


});


router.get("/hello", async () => {
    return console.log("welcome to the routerrrr");

    console.log(hello);
});

router.post("/createUserAPI", async (req, res) => {

    let { userName, email, password } = req.body; // means username=req.body.userName

    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {

        return res.json({ message: "user already exists" })
    };
   const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    try {
        const user = new User({
            userName: userName,
            email: email,
            password: hash
        });

        
        
        
        await user.save();
        const {password,...others} = user._doc;
        return res.json({ others })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "internal error" })

    };
    // console.log("hello2")

})



module.exports = router;