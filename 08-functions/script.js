"use strict";
// Functions
// Function Types
// Optional and default parameters
// Rest Parameters
// Overload
Object.defineProperty(exports, "__esModule", { value: true });
// function abcd(): type{
// }
function abc(name, movieName, type = "Not known") {
    return "";
}
abc("Nolan", () => { console.log("Shutter Island"); });
abc("Lee", () => { console.log("The Avengers"); }, "Action");
function sum(...args) {
    console.log(args);
    console.log(args.reduce((a, b) => a + b));
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//# sourceMappingURL=script.js.map