
const a=3;
console.log(a,b);
var b= 4;
let c=2;

//temporal dead zone
//1st phase
//Memory ------------------------------- Temporary Memory(temporal dead zone)

//b: undefined                                a,c

//2 phase execution
//Memory
//a:3
//b:4
//c:4

                                            