"use strict";
// Classes and Objects
// Class defination
// Constructors
// Access modifiers (public, private, protected)
// Readonly properties
// Optional properties
// Parameter properties
// Getters and setters
// Static members
// Abstract classes and methods
class Device {
    constructor() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
let d3 = new Device();
// class BottleMaker{
// this custructor directly initial value without writing the full code.
//     constructor(public name: string, public price: number){
//     }
// }
// let b1 = new BottleMaker("Milton", 499);
class BottleMaker {
    constructor(name, price, type, material) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.material = material;
    }
}
let b2 = new BottleMaker("Cello", 799, "thermas", "stainless steel");
