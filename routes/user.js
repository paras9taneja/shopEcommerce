const express= require("express")
const router = express.Router();


router.get("/hello",async()=>{
   return  console.log("welcome to the routerrrr");
   
    console.log(hello)
});

router.post("/userAPI", async(req,res)=>{

    let {userName,password} = req.body; // means username=req.body.userName

    userName = await User.findOne({})

    if(userName){

    }

})



module.exports = router;