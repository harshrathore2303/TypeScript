"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    eat() {
        console.log("Eats food");
    }
}
let animal = new Animal(); // Cannot create an instance of an abstract class
class Fish extends Animal {
}
// Non-abstract class 'Fish' does not implement inherited abstract member legs from class 'Animal'.
class Dog extends Animal {
    interaction() {
        console.log("Dog barks");
    }
    legs() {
        console.log("Dog has 4 legs");
    }
}
let dog = new Dog();
console.log(dog.legs());
//# sourceMappingURL=script.js.map