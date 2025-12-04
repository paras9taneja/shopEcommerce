console.log("hello");

const express= require("express");
const app = express();
const env = require("dotenv");
const dbConnect = require("./db");

app.use(express.json())
env.config();
const PORT = process.env.PORT;
dbConnect();


app.use("/api",require("./routes/user"));



app.listen(PORT || 7000,()=>{
    console.log(`server is listening at http://localhost:${PORT}`)
});