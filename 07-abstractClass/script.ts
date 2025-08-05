abstract class Animal{
    abstract legs(): void; 
    eat(){
        console.log("Eats food")
    }
}

let animal = new Animal(); // Cannot create an instance of an abstract class


class Fish extends Animal{ // 'Fish' is declared but never used.
    
}
// Non-abstract class 'Fish' does not implement inherited abstract member legs from class 'Animal'.


class Dog extends Animal{
    interaction(){
        console.log("Dog barks");
    }
    legs(){
        console.log("Dog has 4 legs");
    }
}

let dog = new Dog();
console.log(dog.legs())