const express = require("express");

const app = express();

app.get("/health-checkup",function(req,res){

    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="yaman" || password != "pass"){
        res.status(403).json({
            msg: "user doesnt exist",
        });
        return;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: " wrong inputs",
        });
        return;
    }

    res.json({
        msg: "your kidney is fine!"
    })
});

app.listen(3000);