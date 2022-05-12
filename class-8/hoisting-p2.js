function a() {
    console.log("I am a");
    return function b() {
       console.log("I am b");
    }
};
const c = a();
c();