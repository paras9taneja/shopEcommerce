const express = require("express");
const User = require("../models/User");
const router = express.Router();
// const user=require(u)

router.get("/", async (req,res) => {
    return res.send("hello")
    return console.log("welcome to the server");

 
});


router.get("/hello", async () => {
    return console.log("welcome to the routerrrr");

    console.log(hello);
});

router.post("/createUserAPI", async (req, res) => {

    let { userName, email, password } = req.body; // means username=req.body.userName

    const existingUser = await User.findOne({ userName: req.body.userName });

    if (existingUser) {
        return res.json({ message: "user already exists" })
    };

    try {
        const user = new User({
            userName:userName,
            email: email,
            password: password
        });

        await user.save();
        return res.json({ user })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "internal error" })

    };


})



module.exports = router;