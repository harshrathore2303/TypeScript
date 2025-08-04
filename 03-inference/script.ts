// Example of type inference
let v = 15; // Hovering over `v` shows: let v: number
// we can also say "v variable is inferred to be number". 

// When a type inference is made from several expressions, the types of those expressions are used to calculate a “best common type”. For example
let x = [0, 1, null]; // To infer the type of x in the example above, we must consider the type of each array element. Here we are given two choices for the type of the array: number and null. The best common type algorithm considers each candidate type, and picks the type that is compatible with all the other candidates.
// Inferred type: (number | null)[]

// here we explicity inferred a variable to number | boolean | string which means we can store any type from them. We say this type annotation
let a: number | boolean | string;
a = 12;
a = "harry";
a = true;


// to be read in Assertions
let name: string | null = null;

// we use the non-null assertion operator to tell the compiler that name will never be null
let nameLength = name!.length;