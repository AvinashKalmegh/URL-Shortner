const  shortid  = require("shortid") ;
const UrlModel = require("../models/url") ;


const newShortUrl = async(req,res)=>{

    const body = req.body;

    if(!body.url){
        return res.status(400).json({error: "URL is required"})
    }

    const shortId = shortid();
    const data = await UrlModel.create({
        shortId:shortId,
        redirectUrl : body.url,
        visitHistory: []
    })

    return res.json({id:shortId})
}



module.exports = {newShortUrl};