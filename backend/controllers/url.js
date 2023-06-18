const  shortid  = require("shortid") ;
const UrlModel = require("../models/url") ;


const newShortUrl = async(req,res)=>{

    const body = req.body;

    if(!body.url){
        return res.status(400).json({error: "URL is required"})
    }

    const shortId = shortid();
    await UrlModel.create({
        shortId:shortId,
        redirectUrl : body.url,
        visitHistory: []
    })

    return res.json({id:shortId})
}


const handleGetAnalytics = async(req, res)=>{
    const shortId = req.params.shortId;
    const result = await UrlModel.findOne({shortId});
    return res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory})
}



module.exports = {newShortUrl, handleGetAnalytics};