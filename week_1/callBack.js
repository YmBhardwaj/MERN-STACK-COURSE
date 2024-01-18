  //before callback
function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}
function quad(n){
    return n*n*n*n ;
}

function sumOfSquares(a,b){
    let square1 = square(a);
    let square2 =square(b);
    return square1 + square2;
}

// let ans = sumOfSquares(1,2);
// console.log(ans);

// callback functio using we pass function as arrgument 
// also called as fucntiona; arrguments

//function become genric
function sumOfType(a,b, callBackFn){
    let value1 = callBackFn(a);
    let value2 = callBackFn(b);
    return value1 + value2;
}
  
//now let check for square
let ans = sumOfType(1,2, square);
console.log("square of values " +ans);
//now check for cube
let cubeAns = sumOfType(1,2,cube);
console.log("cube of values " + cubeAns);

//now check for quad
let quadAns = sumOfType(1,2,quad);
console.log("quad of values " + quadAns);