const express = require("express");
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use("/api/auth",authRouter);



mongoose.connect(`mongodb://mongodb:27017/AuthicationTesting?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`)
.then(a=> {console.log("success !")})
.catch(error => console.log(error));

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`listening to port ${process.env.SERVER_PORT}`);
})

