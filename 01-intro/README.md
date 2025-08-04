# TypeScript Overview

TypeScript is a **superset of JavaScript** that brings optional static typing(statically typed language) and future JavaScript(dynamically typed language) features to today's development workflow.

## 🔧 How It Works

* TypeScript code is written using the `.ts` file extension.
* It is compiled into plain JavaScript using the `tsc` (TypeScript Compiler).
* The resulting JavaScript code can be executed on any platform that supports JavaScript.

## 🧠 Key Concepts

* **Syntax**: TypeScript uses all JavaScript syntax and extends it with type annotations and interfaces.
* **Compatibility**: All valid JavaScript code is valid TypeScript code, but not all TypeScript code is valid JavaScript.

## ❓ Why TypeScript?

* ✅ **Type Safety**: Catch errors at compile-time instead of runtime.
* 🚀 **Productivity**: Better autocompletion, navigation, and refactoring support in editors.
* 🔮 **Future-Proof**: Supports upcoming JavaScript features before they are widely available.

## tsconfig.json

* tsconfig.json is a configuration file in TypeScript that specifies the compiler options for building your project. It helps the TypeScript compiler understand the structure of your project and how it should be compiled to JavaScript. Some common options include:

* **target**: the version of JavaScript to compile to.
* **module**: the module system to use.
* **strict**: enables/disables strict type checking.
* **outDir**: the directory to output the compiled JavaScript files.
* **rootDir**: the root directory of the TypeScript files.
* **include**: an array of file/directory patterns to include in the compilation.
* **exclude**: an array of file/directory patterns to exclude from the compilation.

## This is how tsconfig.json looks like
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

TypeScript enhances code quality, maintainability, and team collaboration—especially in large codebases.

---

> "TypeScript doesn’t stop you from writing JavaScript. It helps you write better JavaScript."
