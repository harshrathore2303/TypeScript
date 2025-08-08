class BottleMaker<T> {
    constructor (public key : T){

    }
}

let b1 = new BottleMaker<string>("Hello");
let b2 = new BottleMaker(4);

function abcd<T> (a: T, b: T): T{
    return "Hello" as T;
}

abcd<string>("Hello", "2");

