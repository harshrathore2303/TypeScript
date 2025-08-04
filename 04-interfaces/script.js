"use strict";
// Interfaces and Type Aliases
// Defining Interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Intersection Types
// here obj use the face of user
function getDataOfUser(obj) {
    // here obj will have keys name, email, password   
    console.log(obj.gender); // give undefined
}
getDataOfUser({ name: "name", email: "email", password: "sdv" }); // it will give age property is missing because we have made a new interface with same name and ts will merge both interfaces with same name.
function abcd(obj) {
    // here we can access both admin and user details
}
// Merged Interface:
const u = {
    name: "harry",
    email: "harry@email.com",
    password: "123",
    age: 25
};
let a = 5;
// Intersection types
let b; // "|" -> union
function acdb(a) {
}
// it will give: Duplicate identifier 'Boy'. No merging like interfaces
// type create a new type with the help of data types. while interface creates object a shape.
