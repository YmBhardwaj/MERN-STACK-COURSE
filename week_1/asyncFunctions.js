
// function onDone(content){
//     console.log(content);
// }

// readFile("a.txt",onDone) //async call

// console.log("hi there");

function onDone(){
    // console.log("hi there");
}

setTimeout(onDone,1000); //thread not stuck at this function like a sync function 
//in async function task is delicate to other one
// we don't wait for funtions to be done we move to other functionalty
// as we seen in this example
// console.log("after setTimeout");

//------------------------------------------------

//another example of async function
// const fs = require("fs");
// let a = 1;
// console.log(a);

// fs.readFile("a.txt","utf-8",(err,data)=>{ // this a async function for code
//     console.log("data read from file is ");
//     console.log(data);
// })

// let ans = 0;
// for(let i = 0;i<100;i++){
//     ans = ans + i;
// }
// console.log(ans);


//__________________________________
//creating async functions

function myTimeSet(fn,duration){
    setTimeout(fn,duration);
}

myTimeSet(function(){
    console.log("hi there");
},1000);