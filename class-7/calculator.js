//add multiplication divison Subtraction modu

function calculator(callback) {
    const n=1;
    switch(9) {
        case 1: 
            return callback(1);
        case 2:
            return callback(2,3);
        case 9:
            return callback(1,2,3,4,5,6,7,8,9);
        default:
           return callback(0,1);
    }
}

function add(...args) {
    //...test, ...a
    //[1,2,3,4,5,6,7,8,9]
    let sum = 0;
    for(let i=0;i<args.length;i++) {
        sum = sum + args[i]
    }
    return sum;
}
console.log(calculator(add));