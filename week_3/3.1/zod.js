const express = require("express");
const zod = require("zod");

const schema = zod.array(zod.number());

const app = express();

app.use(express.json());

app.post("/health",function(req,res){
    const kidney = req.body.kidneys;
    const response = schema.safeParse(kidney);

    res.send({
        response
    })
})

app.listen(3000);
