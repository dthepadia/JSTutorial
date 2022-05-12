///higher order function
//whenever a function accepts another function as an argument or return some function 

function hoc(callback) {
    callback();
}

hoc(()=> {

});
///hoc with return 
function hoc1() {
    return ()=> {

    };
}