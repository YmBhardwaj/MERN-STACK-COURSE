const input = [1,2,3,4,5];

function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}
//use map function on arrays
function transformer(inpt, fn){
    return inpt.map(fn);
}

const ans = transformer(input,cube);
console.log(ans);

//use of filleter function in arrays
function filleter(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const ans2 = input.filter(filleter);
console.log(ans2)