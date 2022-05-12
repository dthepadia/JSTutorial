const person = {
    firstName: "Test",
    lastName: {firstName: "abc", lastName: "bcd"}
}
const person1 = {
    firstName: "Test1",
    lastName: "Testing1"
}
function fullName(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3, "args");
    return this.firstName + this.lastName + arg1;
}
//call apply bind( methods are used for external or explicit binding);

console.log(fullName.call(person1,"23","24","25"));
console.log(fullName.apply(person1,["23", "24"]))
//for()