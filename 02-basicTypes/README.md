# TypeScript Types Overview

In TypeScript, **types** are used to define the structure and behavior of variables, objects, and functions. They help developers catch errors early and improve code readability and maintainability.

## 📌 What is a Type?

A **type** in TypeScript is a way to describe what kind of value a variable can hold, and what operations are valid on that value.

---

## 📚 Categories of Types

### 🔸 Primitive Types - Stored in Stack memory

These are the basic data types built into JavaScript and extended by TypeScript:

* `string`
* `number`
* `boolean`
* `null`
* `undefined` (default value of uninitialized variables)
* `symbol` (unique and immutable value)
* `bigint`

### 🔸 Object Types or References - Stored in Heap memory

These types refer to more complex structures:

* **Arrays**: `number[]`, `string[]`, etc.
* **Objects**: Custom shape defined using type aliases or interfaces
* **Classes**: Object-oriented structure with properties and methods
* **Functions**: Can be typed for arguments and return values

### 🔸 Special Types

* `any`: We can use it whenever we don’t want a particular value to cause typechecking errors.
* `unknown`: Safer alternative to `any`, requires type checking before use
* `void`: Typically used for functions that don’t return a value
* `never`: For functions that never return (e.g. throw errors)
* `undefined`: used to signal uninitialized value 
* `null`: used to signal absent value 
---

## ❓ Why Use Types in TypeScript?

* ✅ Prevent runtime bugs with compile-time checks
* 🧠 Improve developer experience with better IntelliSense
* 🛠️ Make code easier to refactor and maintain
* 📄 Act as documentation for your codebase

---

## 🧪 Example

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

let user: string = "Alice";
console.log(greet(user));
```

---

> "Types help you think more clearly about your code and catch mistakes before they happen."
