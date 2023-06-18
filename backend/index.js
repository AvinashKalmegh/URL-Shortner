const express = require("express");
const main = require("./configs/db");
const urlRoute = require("./routes/url")
const UrlModel = require("./models/url")
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to url shortner")
})

app.get("/short",(req,res)=>{
    res.send("Hello from short")
})

app.use("/url",urlRoute);
// app.use("/:shortId",urlRoute )

app.get("/:shortId", async(req,res)=>{
    const shortId = req.params.shortId;

    const entry = await UrlModel.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {timeStamp : Date.now()}
        }
    })
    res.redirect =(entry.redirectUrl);
})

app.listen(8080, ()=>{
    main();
    console.log("running on port 8080");
})