"use strict";
class Car{
    constructor(name, year){
        this.carName = name;
        this.carOld = year;
    };
    carab(sprid){
        console.log(this.carName + " " + "is raning " + sprid);
    };
};

const bmw = new Car("BMW", 2023);
const firari = new Car("FIrari", 2022);
const lamorgini = new Car("Lamorgini", 2026);


bmw.carab("100 km par hour")
firari.carab("100 km par hour")
lamorgini.carab("100 km par hour")
