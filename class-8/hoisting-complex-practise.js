var a = 10;

function b() {
    a=20;
    return;
}
b();
function a() {

}
a();
console.log(a);
//
//Memory allocation
//a: undefined
//b: fn[b]

//Execution
//a: 10;