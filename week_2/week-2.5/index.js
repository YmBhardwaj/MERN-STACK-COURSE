const express = require('express');
const app = express();
const user =[{
    name : "Jhone",
    kidneys: [{
        helthy:false
    }]
}];

 app.use(express.json());
app.get("/",function(req,res){
    const jhoneKidneys = user[0].kidneys;
    // console.log(jhoneKidneys);
    const numberOfKidney = jhoneKidneys.length;
    let noOfHealthyKidneys =0;
    for(let i = 0;i<numberOfKidney;i++){
        noOfHealthyKidneys  += 1;
    }

    const numberOfUnHelKidney = numberOfKidney - noOfHealthyKidneys;
    res.json({
        numberOfKidney,noOfHealthyKidneys,numberOfUnHelKidney
    })
})
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    // console.log(jhoneKidneys);
    user[0].kidneys.push(isHealthy);
    res.json({
       msg : "Done!"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++){
         user[0].kidneys[i].helthy =true;
    }
    res.json({
    })
})

app.listen(3000);