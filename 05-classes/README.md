# Classes
Classes in TypeScript are a blueprint for creating objects (instances of a class), providing a way to structure objects and encapsulate data and behavior.

## Fields
Properties defined inside a class are called fields.

## Constructors
Class constructors are very similar to functions.You can add parameters with type annotations, default values, and overloads.
```
class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

```
class Point {
  x: number = 0;
  y: number = 0;
 
  // Constructor overloads
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x: string | number, y: number = 0) {
    // Code logic here
  }
}
```

### There are just a few differences between class constructor signatures and function signatures:
* **Constructors can’t have type parameters** - these belong on the outer class declaration, which we’ll learn about later
* **Constructors can’t have return type annotations** - the class instance type is always what’s returned

## Methods
A function property on a class is called a method. Methods can use all the same type annotations as functions and constructors.

## this keyword
The object that is currently executing the function or owning the method.