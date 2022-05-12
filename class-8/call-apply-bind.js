const person = {
    firstName: "Test",
    lastName: {firstName: "abc", lastName: "bcd"}
}
const person1 = {
    firstName: "Test1",
    lastName: "Testing1"
}
function fullName() {
    return this.firstName + this.lastName;
}
//call apply bind( methods are used for external or explicit binding);
const bindedFunction = fullName.bind(person.lastName);
const bindedFunction1 = fullName.bind(person1);
console.log(bindedFunction(),bindedFunction1());