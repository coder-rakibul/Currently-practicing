'use stric';
class Parson{
    constructor(name, id, school, scclass, status){
        this.name = name;
        this.id = id;
        this.school = school;
        this.scclass = scclass;
        this.status = status;
    };
    car(){
        console.log("My car name is " + this.name);
    }
};

// const myInfo = new Parson("Rakibul Islam");

// console.log(`My name is ${myInfo.name}`);
const par = new Parson("Tasla");

par.car()