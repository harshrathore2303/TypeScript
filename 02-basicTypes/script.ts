// Basic Types
// Primitive
// Arrays
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never

let a = 45;
//*** a = "Harry" *** // Type 'string' is not assignable to type 'number'.

let arr = [1, 2, 3, "Hello", {name: "Harsh"}]; // mixed type

// Now declare with explicit type
let newArr: number[] = [1, 2, 3, 4]; 

// tuple
let tuple:[string, number] = ["Harsh", 22]

// enumerations
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}
UserRoles.ADMIN;

let b; // by default type is **any**, always make sure that variablee should not have type **any** in typescript, NO CHECKING.

/* OR */

let c: number; // good practice for future reference

let d: unknown; // for checking type before operation


// not returning any type so use void
function abcd(): void{
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

