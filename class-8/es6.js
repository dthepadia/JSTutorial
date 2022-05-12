//destructuring
const person = {
    firstName: "Something",
    lastName: "nothing"
}
let {firstName, lastName} = person;
firstName = ""
// const firstName = person.firstName;
// const lastName = person.lastName;
//console.log(firstName, lastName);
//copying objects
const personCopy = {...person, age: 23};
personCopy.firstName = "UpdatedSomething";
console.log(personCopy, person);
//copying arrays
const arr = [1,2,3,4,5];
const arrCopy = [...arr,6,7,8];
console.log(arrCopy);