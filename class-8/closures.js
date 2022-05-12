function outer() {
    var a = 10;

    console.log(b);
    return function inner() {
      a = 30;
      console.log(a)
      function inner1() {
          console.log(a)
      }
      inner1();

    }
};
const b = outer();
b();

//outer: fn[outer]

//fn:
//a: 10
//inner: fn[inner]
//b: fn[inner]