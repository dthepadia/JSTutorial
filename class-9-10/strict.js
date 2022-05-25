"use strict";
//1.
// function testStrict(a,a,a) {
//     console.log(a,a);

// }
// testStrict(3,2,1);
//user cant pass argument of same name
//window
//2.
// a = 10;
// console.log(a);
//3.
///need to look on 
const obj = new Object();
obj.prototype = {key: "test"}
delete obj.prototype;
//delete obj.__proto__;
console.log(obj.prototype);




