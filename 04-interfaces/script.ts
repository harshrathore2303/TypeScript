// Interfaces and Type Aliases
// Defining Interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Intersection Types


// Interfaces
// this is the face
interface User{
    name: string,
    email: string,
    password: string,
    gender?: string // ? for optional field.
}

// here obj use the face of user
function getDataOfUser(obj: User) {
    // here obj will have keys name, email, password   
    console.log(obj.gender); // give undefined
}

getDataOfUser({name: "name", email:"email", password:"sdv"}); // it will give error for age property is missing because we have made a new interface with same name and ts has merged both interfaces with same name and now it need age property aswell.

// getDataOfUser({name: "name", email:"email"}); // will give error because it has not password field.


// Extending interfaces
interface Admin extends User{
    admin: boolean;
}

function abcd(obj: Admin) {
    // here we can access both admin and user details
}

// Read about merging of interfaces. If you declare the same interface name multiple times, TypeScript will merge them. 
interface User {
    age: number;
}

// Merged Interface:
const u: User = {
    name: "harry",
    email: "harry@email.com",
    password: "123",
    age: 25
};

// Types aliases
type sankhya = number | string;
let a: sankhya = 5;

// Intersection types
let b: string | null; // "|" -> union

type Boy = {
    name: string,
    age: number
}

// Intersection
type Man = Boy & {
    getDetails(boy: string) : void
}

function acdb(a: Man) {
    
}

// from here both interface and type looks similar but not
// type has no merging. 
type Boy = {
    education: string
}
// it will give: Duplicate identifier 'Boy'. No merging like interfaces

// type create a new type with the help of data types. while interface creates object a shape.