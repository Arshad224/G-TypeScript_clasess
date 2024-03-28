"use strict";
// calculater in TypeScript using terminal input
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt("enter your first number:"));
var n2 = parseInt(prompt("enter your second number:"));
var opreater = (prompt("enter opreater (+,-,*,/):"));
if (opreater = "+") {
    console.log("the answer of ".concat(n1, " ").concat(opreater, " ").concat(n2, " = ").concat(n1 + n2));
}
if (opreater = "-") {
    console.log("the answer of ".concat(n1, " ").concat(opreater, " ").concat(n2, " = ").concat(n1 - n2));
}
if (opreater = "*") {
    console.log("the answer of ".concat(n1, " ").concat(opreater, " ").concat(n2, " = ").concat(n1 * n2));
}
if (opreater = "/") {
    console.log("the answer of ".concat(n1, " ").concat(opreater, " ").concat(n2, " = ").concat(n1 / n2));
}
else {
    console.log("please select the correct opreater");
}

