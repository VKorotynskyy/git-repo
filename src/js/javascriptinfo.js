'use strict'

//***1. Variables***//

    //**1.1**//
 let admin,
    name;
    name = 'John';
    admin = name;
    alert(`admin's name is ${admin}`);

    //**1.2**//
 let earthPlanet,
     currentUser;

    //**1.3**//
const BIRTHDAY = '18.04.1982'; // true
const AGE = someCode(BIRTHDAY); // false

//***2. Type Conversions***//

    //**2.1**//
"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9\n" + 5 // " -9\n5"
"  -9\n" - 5 // -14 ?
null + 1 // 1
undefined + 1 // NaN

//***3. Operators***//

    //**3.1**//
 let a = 1, b = 1;
 let c = ++a; // 2
 let d = b++; // 1

    //**3.2**//
 let a = 2;
 let x = 1 + (a *= 2); // 5

//***4. Comparison***//

    //**4.1**//
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

//***5. Modal windows***//

    //**5.1**//
 (function interact() {
 let requestName = prompt('Enter your name', '');
 alert(`Hello, ${requestName}`)
}) ()

//***6. ifelse Conditionals***//

    //**6.1**//
if ("0") {
    alert('Hello');
} // Hello

    //**6.2**//
 (function jsName() {
     let jsPrompt = prompt('What is the official name of JavaScript?', '');
     if (jsPrompt === 'ECMAScript'.toLowerCase()) {
        jsPrompt = jsPrompt.replace(/^\w{5}/, 'ECMAS')
        alert(`Right, ${jsPrompt}!`);
     } else {
        alert('U don\'t know JS');
     }
 }) ()

    //**6.3**//
 (function ifNumber() {
    let value = +prompt('Enter number', 0);
    if (isNaN(value) || !(typeof value === 'number' && value % 1 === 0)) {
        return NaN;
    } else {
    if (value > 0) {
        alert('1');
    } else if (value === 0) {
        alert(0);
    } else {
        alert(-1);
    }
}
 })()

    //**6.4**//

 (function() {
     let userLogin = prompt('Enter your login details', '');
     let userPass = prompt('Enter your password. Case sensitive', '');
     if(userLogin == 'Admin' || 'admin') {
         return userPass;
      if(userPass === 'TheMaster') {
             alert('Wellcome');
         } else if (userPass == null) {
             alert('Cancelled');
         } else {
             alert('Wrong Password');
            return userLogin;
         }
     } else if(userLogin == null) {
         alert('Cancelled');
     } else {
         alert('I don\'t know You');
        return userPass;
     }
 }) (); // doesn't work

    //**6.5**//
 ((a,b) => {
     return a + b < 4 ? 'Bellow' : 'Over';
    })(3, 0);

    //**6.6**//
 let message = (login === 'Employee') ? 'Hello'  :
                (login === 'Director') ? 'Greetings' :
                (login === '') ? 'No login' : '';

//***7. Logical Operators***//

    //**7.1**//
 alert(null || 2 || undefined); // 2

    //**7.2**//
 alert(alert(1) || 2 || alert(3)); // 1, 2

    //**7.3**//
 alert(1 && null && 2); // null

    //**7.4**//
 alert(alert(1) && alert(2)); // 1

    //**7.5**//
 alert(null || 2 && 3 || 4); // 3

    //**7.6**//
 (age => {
     if (age >= 14 && age <= 90) {
         return age;
     } else {
         return null;
     }
 })();

    //**7.7**//
 (age => {
     if (!(age >= 14 && age <= 90)) {
         return age;
     } else {
         return null;
     }
 })();

    //**7.8**//
 if (-1 || 0) alert('first'); //'first'
 if (-1 && 0) alert('second'); //nothing
 if (null || -1 && 1) alert('third'); // 'third'

//***8. Loops***//

    //**8.1**//
 let i = 3;

 while (i) {
     alert(i--);
 } // 1

    //**8.2**//
 let i = 0;
 while (++i < 5) alert(i); // 1,2,3,4
 let i = 0;
 while (i++ < 5) alert(i); // 1,2,3,4,5
    8.3
 for (let i = 0; i < 5; i++) alert(i); // 0,1,2,3,4
 for (let i = 0; i < 5; ++i) alert(i); // 0,1,2,3,4
    8.4
 for(let i = 2; i <= 10; i++) {
     if (i % 2 === 0) {
        console.log(i);
     }
 } //get even

    //**8.5**//
 for (let i = 0; i < 3; i++) {
     alert(`number ${i}!`);
 }

 let i = 0;
 while(i < 3) {
     i++;
      alert(`number ${i}!`);
 }

    //**8.6**//
(()=>{
    let num;
    do {
      num = prompt('Enter a number greater than 100', 0);
      console.log(num);
    } while(num <= 100 && num);
})();

    //**8.7**//
let n = prompt('Enter number', 50);
if(n === null) {
    n = 50;
}
nextPrime:
for(let i = 0; i <= n; i++) {
    if(i % 2 === 0) {
        continue;
    } else {
        for(let j = 3; j < i; j+=2) {
            if(i % j === 0) {
                continue nextPrime;
            }
        }
        console.log(i);
    }
} // do not understand the code

//***8. Switch***//

    //**8.1**//
    let browser = prompt('Enter your browser name, pls', '');
 if(browser == 'Chrome'.toLowerCase() ||
    browser == 'firefox'.toLowerCase() ||
    browser == 'safari'.toLowerCase() ||
    browser == 'opera'.toLowerCase()) {
     console.log('It\s ok, we support it!');
 } else if (browser === 'Edge'.toLowerCase()) {
     console.log('You\'ve got the edge!');
 } else {
     console.log('We hope that this page looks ok!');
 } // doesn't work properly!!!

    //**8.2**//
    let a = +prompt('a?', 0);
 switch(a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log(`2 or 3`);
        break;
    default:
        console.log('Another number');
 }
//***9.  Functions***//

    //**9.1**//
((age)=> {
  return  (age > 18) ? true : confirm('Do you have permission?');
})();
((age) => {
    return (age > 18)  || confirm('Do you have permission?');
})();

    //**9.2**//
 ((a, b)=> a > b ? a : b)();

    //**9.3**//
 ((x, n) => {
     let res = x;
     for(let i = 1; i < n; i++) {
        if(n >= 1) {
         res *= x;
        } else {
         console.log(`Power ${n} is not supported`);
        }
     }
     return res;
 }) ();

//***10. Function expressions***//

    //**10.1**//
 ((question, yes, no) => {
     confirm(question) ? yes() : no();
 })('Do you agree?', 
    () => console.log('you agreed'), 
    () => console.log('you canceled'));

//***11. Objects***//

    //**11.1**//
 let user = {};
 user.name = 'John';
 user.surname = 'Smith';
 user.name = 'Pete';
 delete user.name;

    //**11.2**//
    let user1 = {};
 function isEmpty(obj) {
    for (let keys in obj) {
        return false;
    }
    return true;
 }
 isEmpty(user1)

    //**11.3**//
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function salariesSum(obj) {
    let sum = 0;
      for (let key in obj) {
        sum += obj[key];
      }
      return sum;
  }
  salariesSum(salaries);

    //**11.4**//
 let menu = {
   width: 200,
   height: 300,
   title: "My menu"
 };

 function multNumeric(obj) {
   for(let key in obj) {
     if (typeof obj[key] === 'number') obj[key] *= 2; 
   }
 }
  multNumeric(menu);

//***12. Object methods.This***//

    //**12.1**//
let calculator = {
    read() {
        this.num1 = +prompt('Enter an integer, 0');
        this.num2 = +prompt('Enter one more number, 0');
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
}
console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());

    //**12.2**//
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}
ladder
    .up()
    .up()
    .down()
    .up()
    .showStep();

///**13.Constructor new**///
    //**13.1**//

let obj = {};

function A() {
    return obj;
}
function B() {
    return obj;
}
alert(new A() == new B()); // true

    //**13.2**//
function Calculator () {
    this.a = +prompt('a?', 0);;
    this.b = +prompt('b?', 0);;
    this.read = function() {
        this.a;
        this.b;
    };
    this.sum = function() {
       return this.a + this.b;
    }
    this.mul = function() {
      return  this.a * this.b;
    }
}
let calc = new Calculator();
calc.read();
calc.sum();

    //**13.3**//
function Accumulator(startingValue) {
    this.read = function() {
       this.value += +prompt('How much to add?', 0);
    };
    this.value = startingValue;
}
let accumulator = new Accumulator(1);

    //**13.4**//
    function Calculator() {

    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        methods[name] = func;
    };
}// do not understand, coppied from solution



