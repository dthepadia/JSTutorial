
const testPromise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
          reject({error: 500, errorMessage: "Internal Error Ocuured at server"});
          resolve([{studentName: "abc", age: 23}]);
    }, 5000)
});
testPromise.then((data)=> {
    console.log(data);
}).catch((error)=> {
 console.log(error);
})