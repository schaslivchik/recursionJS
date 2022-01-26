"use strict";

//1
function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}
console.log("pow(2,3) :>> ", pow(2, 3));

//2
function bracketWrapper(n) {
  if (n === 0) {
    return;
  }
  console.log("(");
  bracketWrapper(n - 1);
  console.log(")");
}

bracketWrapper(5);
