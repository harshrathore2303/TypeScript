// Functions
// Function Types
// Optional and default parameters
// Rest Parameters
// Overload

// function abcd(): type{

// }

function abc(name: string, movieName: () => void, type: string = "Not known"):string {
    return "";
}

abc("Nolan", () => {console.log("Shutter Island")});
abc("Lee", () => {console.log("The Avengers")}, "Action");

function sum(...args: number[]){
    console.log(args);
    console.log(args.reduce((a, b) => a + b));
}

sum(1,2,3,4,5,6,7,8,9,10)


