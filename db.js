console.log("welcome to database");

const mongoose= require("mongoose");

const dbConnect = async()=>{
    try {
      await  mongoose.connect(`${process.env.MONGO_URI}`);
        console.log("database connected succesfully")
        
    }catch(err){
        console.error( "mongodb connection error:",err);
        process.exit(1);
    }
};

module.exports = dbConnect; 