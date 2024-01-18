const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS = [
    {
        username : "harkirat@gmail.com",
        password : "123",
        name : "harkirat singh"
    
    },
    {
        username :"ymbhardwaj@gmail.com",
        password : "122334",
        name : "yaman"
    }
]

function userExists(username, password){
    let response = false;
   for(let i = 0;i<ALL_USERS.length;i++){
    
    if(ALL_USERS[i].username==username && ALL_USERS[i].password == password){
        response =true;
    }
   }
   return response;
}

 app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        res.status(403).json({
            msg : "user not present in db",
        });
    }

    var token = jwt.sign({username : username},jwtPassword);
    return res.json({
     "token" : token,
    }); 

 });
 app.get("/users",function(req,res){
    const token = req.headers.authorization;

      const decode = jwt.verify(token,jwtPassword);
      const username = decode.username;
      res.status(2000).json({
          "username" : ALL_USERS,
             });
    });

 app.listen(3000);