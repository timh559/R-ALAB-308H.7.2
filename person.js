class Person {
    constructor(name, age, employed) {
        this.name = name;
        this.age = age;
        this.employed = employed;
    }
    isHungry(boolean){
        if (boolean) {
            console.log(`${this.name} orders some postmates`);
        } else {
            console.log(`${this.name} is not hungry right now`);
        }
    }
}
class PostalWorker extends Person {
    constructor(name, age, employed) {
        super(name, age, employed);
    }
    deliversMail(isDog) {
        if (isDog) {
            console.log(`Postman ${this.name} throws mail and runs from the dog`);
        } else {
            console.log(`Postman ${this.name} enters the yard and delivers the mail`);
        }
    }
}
class Chef extends Person {
    constructor(name, age, employed) {
        super(name, age, employed);
    }
    cooksFood(ifOrderUp) {
        if (ifOrderUp) {
            console.log(`Chef ${this.name} whips up a meal for the customer`);
        }
    }
}