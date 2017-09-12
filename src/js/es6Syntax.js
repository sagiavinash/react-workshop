/* 0. let, const */
var a = 1;
const b = 1;

a = 2; // a = 2
b = 2; // Error: const cannot be reassigned


/* 1. Object spread syntax */
var a = {
  x: 1,
};

var b = {
  ...a,
  y: 2,
};

// b = {
//   x: 1,
//   y: 2,
// }

/* 2. Object Literals */
const key = 'hello';
const obj = {
  [key]: 'value';
};

/* 3. Arrow function syntax */
var a = {
  x: 1,
  y: function() {
    var arrowFn = () => {
      console.log(this.x);
    };
    
    function normalFn() {
      console.log(this.x);
    }
    
    arrowFn();
    normalFn();
  },
};

a.y();

// arrowFn() => logs 1,
// normalFn() => logs undefined
