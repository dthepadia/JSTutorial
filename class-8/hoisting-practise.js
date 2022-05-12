hoistedFunction();
///testArrowHoisting: undefined


function hoistedFunction() {
    console.log("Function invoked");
}
var testArrowHoisting = ()=> {
    console.log("Arrow function Invoked");
}
testArrowHoisting();
