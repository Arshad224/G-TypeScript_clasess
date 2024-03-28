// calculater in TypeScript using terminal input

var prompt = require("prompt-sync")();

let n1 = parseInt(prompt ("enter your first number:"));
let n2 = parseInt(prompt ("enter your second number:")); 

 let opreater = (prompt("enter opreater (+,-,*,/):"));

 if (opreater = "+") {
    console.log(`the answer of ${n1} ${opreater} ${n2} = ${n1+n2}`);
 }
 if  (opreater = "-") {
    console.log(`the answer of ${n1} ${opreater} ${n2} = ${n1-n2}`);
 }
 if (opreater = "*") {
    console.log(`the answer of ${n1} ${opreater} ${n2} = ${n1*n2}`);
 }
 if (opreater = "/") {
    console.log(`the answer of ${n1} ${opreater} ${n2} = ${n1/n2}`);
 }
  else {
    console.log("please select the correct opreater")
 }
 export{};

