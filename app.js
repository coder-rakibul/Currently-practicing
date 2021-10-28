"use strict";
function Parson(fName, lName, age, proFation){
    this.fistName = fName;
    this.lastName = lName;
    this.age = age;
    this.status = proFation;
    this.fullName = function(){
        return this.fistName + " " + this.lastName;
    }
};

const rakib = new Parson("Rakibul", "Islam", 12, "Softwor Devloper");
const shorna = new Parson("Shorna", "Islam", 13, "Home work");
const nusrat = new Parson("Nusrat", "Kanom", 14, "Jarnalist");

console.log(rakib.fullName());
console.log(shorna.fullName());
console.log(nusrat.fullName());

