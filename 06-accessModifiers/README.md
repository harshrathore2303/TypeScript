# Access Modifiers
In TypeScript, access modifiers are keywords used to control the visibility and accessibility of class properties and methods. 


## Modifier
In programming, a modifier is a keyword that changes the behavior, visibility, or accessibility of a class, method, variable, or property.

## Three Types in TS
* public
* private
* protected

## readonly
TypeScript provides the readonly modifier that allows you to mark the properties of a class immutable.

```
class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
```

[readonly Vs const](https://www.typescripttutorial.net/typescript-tutorial/typescript-readonly/)