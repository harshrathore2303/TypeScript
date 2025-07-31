"use strict";
// Basic Types
// Primitive
// Arrays
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never
let a = 45;
//*** a = "Harry" *** // Type 'string' is not assignable to type 'number'.
let arr = [1, 2, 3, "Hello", { name: "Harsh" }]; // mixed type
// Now declare with explicit type
let newArr = [1, 2, 3, 4];
// tuple
let tuple = ["Harsh", 22];
// enumerations
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN;
let b; // by default type is **any**, always make sure that variablee should not have type **any** in typescript, NO CHECKING.
/* OR */
let c; // good practice for future reference
let d; // for checking type before operation
// not returning any type so use void
function abcd() {
    console.log("Hello");
}
// return number
// function abcd(): number{
// return 0;
// }
// return string
// function abcd(): string{
// return "Hello";
// }
// return boolean
// function abcd(): boolean{
//     return true;
// }
