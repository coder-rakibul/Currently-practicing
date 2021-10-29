"use strict";

class Parson{
    constructor (name, age){
        this.name = name;
        this.age = age;
    };
    eat(){
        console.log(`I am eating.`);
    };
    seelp(){
        console.log(`I am seeleping.`);
    };
};

const rakib = new Parson("Rakibul", 14);
const shorna = new Parson("Shorna Islma", 16);
rakib.eat()
console.log(rakib.name + " " + rakib.age);

