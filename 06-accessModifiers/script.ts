class BottleMaker{
    // Name:- Only this class
    // Industry: Only this and its child
    // Store: used everywhere

    protected industry: string = "bottle";
    public store: string = "cold water";
    constructor(private name: string){

    }
}

class MetleBottleMaker extends BottleMaker{
    constructor (name: string){
        super(name);
    }
    getName(){
        console.log(this.name);  // this cannot be accessed because it is private. In case of private we can use only in class
        // Property 'name' is private and only accessible within class 'BottleMaker'.
    };

    getStore() {
        console.log(this.store);
    }

    getIndustry() {
        console.log(this.industry); // protected can be accessed upto child classes.
    }

}

let b1 = new MetleBottleMaker("Milton");
b1.getName();
b1.getStore();

// TODO: read about *readonly* keyword in ts