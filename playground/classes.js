class Person {

    constructor(name="Anonymous", age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }

    toString(){
        JSON.stringify(this);
    }

};

class Child extends Person {
    
    constructor(name, age, like="nothing at all."){
        super(name, age);
        this.like = like;
    }

    getGreeting(){
        return `Hiiiiiii! My name is ${this.name} and I like ${this.like}.`
    }

};

var child = new Child("Mike", "4", "Cars");
var grumpy = new Child("Grumpy", "6");
//var anonymousChild = new Child();

console.log(child.getGreeting());
console.log(child.getDescription());
console.log(grumpy.getGreeting());
console.log(grumpy.getDescription());
//console.log(anonymousChild.getGreeting());


class Baby extends Person {

    getGreeting(){
        return `Waaaaaaaaaaaaaaah!`;
    }

};

var baby = new Baby("Manali", 1);

console.log(baby.getGreeting());
console.log(baby.getDescription());





