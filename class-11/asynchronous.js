///
//setTimeout setInterval

//callback Promise async/await


function testAsync() {
    setTimeout(()=> {
        console.log("Hello Inside the timer")
    },3000);
    const id = setInterval(()=>{}, 3000);
    clearInterval(id);
    console.log("Hy outside the timer");
}
testAsync()