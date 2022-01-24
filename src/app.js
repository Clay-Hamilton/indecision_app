//imported files run before app.js:
// import "./utils.js";
import sub, {square, add} from "./utils.js";

console.log("app.js is running!");
console.log(square(4));
console.log(add(3,4));
console.log(sub(23,4));

import isSenior, {isAdult, canDrink} from "./person.js";
console.log(isAdult(1));
console.log(canDrink(20));
console.log(isSenior(66));