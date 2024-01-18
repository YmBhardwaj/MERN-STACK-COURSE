 //async function before using promises
function myTimeSet(fn,duration){
    setTimeout(fn,duration);
}

myTimeSet(function(){
    console.log("hi there");
},1000)


//async function after using promises
function promisifedMyTimeSet(duration){
    const p = new Promise(function(resolve
    ){
        setTimeout(function(){
            resolve();
        },duration);
    });

    return p;
}
const ans = promisifedMyTimeSet(1000);
ans.then(function(){
    console.log("time out is done");
});