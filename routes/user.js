const express = require("express");
const User = require("../models/User");
const router = express.Router();
// const user=require(u)


router.get("/hello", async () => {
    return console.log("welcome to the routerrrr");

    console.log(hello)
});

router.post("/userAPI", async (req, res) => {

    let { userName, password } = req.body; // means username=req.body.userName

    userName = await User.findOne({ userName: req.body.userName });

    if (userName) {
        return res.json({ message: "user already exists" })
    };

    try {
        const user = new User({
            userName: req.body.userName,
            password: req.body.password
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