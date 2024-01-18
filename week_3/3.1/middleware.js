const express = require("express");

const app = express();

function userMiddleware(req,res,next){
    if(username!="yaman" || password != "pass"){
        res.status(403).json({
            msg: "user doesnt exist",
        });
    }
} 
