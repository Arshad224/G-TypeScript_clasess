"use strict";
//logical opreater
let stdName = "Arshad";
let isslot = "Thursday";
let isAllowed = stdName === "Ali" && isslot === "Thursday";
console.log(isAllowed);
//And opreater
let email = "arshad.2244@gmail.com";
let pass = "asif33333";
let loggin = email === "arshad2244@gmail.com" && pass === "asif33333";
console.log(loggin);
//Or Opreater ||
let fvalue = "Arshad";
let svalue = "Shaoib";
let Ai = fvalue === "Arshad" || svalue === "Asif";
console.log(Ai);
//nore opreater (sahi ko galat karna )
console.log(!(8 < 6));
//unary opreater
let n1 = 6;
let n2 = 9;
let n3 = 9;
// n2 = ++n1 + n1++ + --n3 + n3-- + n1 + n3++ + n3;
n3 = n1++ + --n1 + n1--;
console.log(n3);
