"use strict";
// Sub: Prototype

function Parson(name, age) {
    let parsone = Object.create(Parson.prototype);
    parsone.nmae = name;
    parsone.age = age;
    return parsone;
};

Parson.prototype = {
    eat() {
        console.log(`Parson is eating`);
    },
    sleep() {
        console.log(`Parsone is seleping`);
    },
    play() {
        console.log(`Parsone is plaing`);
    }
}

const sakib = Parson("Sakib", 16);
sakib.eat()

console.log(sakib);

const caption = {
    name: "Masafi",
    age: 34,
    cuntry: "Bangladash"
};

const playar = Object.create(caption)
console.log(playar.name + ", " + playar.age);