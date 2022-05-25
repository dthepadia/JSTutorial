///job function number number return----->sum
//if those are not number return error ;
//after 3000ms return sum of two number

const p1 = new Promise((resolve, reject)=> {
    var a = "10";
    var b= 20;
    setTimeout(()=> {
        if(typeof a ==='number' && typeof b === 'number') {
            resolve(a +b);
        } else {
            reject({error: "Invalid Data type"})
        }
    })
})
p1.then((output)=> {
    console.log(output);
}).catch((error)=> {
    console.log(error);
})
