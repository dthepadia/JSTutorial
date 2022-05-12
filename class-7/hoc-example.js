function calculate(callback) {
    //first Step
    // function add(a,b) {
    //     //console.log(a+b)
    //     return a+b
    // }
    var c =3,d=4;
    console.log(callback);
    const a = 2;
    const b=3;
    //return add(2,3)
    return callback(a,b,c,d);
}
function add(a,b,c,d) {
    //console.log(a+b)
    return a+b+c+d;
}
function multiply(a,b) {
    return a*b;
}

console.log(calculate(add));
console.log(calculate(multiply));
[1,2,3,4,5].map((a,b)=> {
 return a+b
})