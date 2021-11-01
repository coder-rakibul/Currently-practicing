"use strict";

const parson = {
    fullName: function(cuntry, city){
        return this.fistName + " " + this.lastName + ' ' + cuntry + ' / ' + city;
    },
};

const rakibul = {
    fistName: "Rakibul",
    lastName: "Islam"
};

const shorna = {
    fistName: "Shorna",
    lastName: "Islam"
};

const coiti = {
    fistName: "Coity",
    lastName: "Hosen"
};

const scornaN = parson.fullName.apply(shorna, ['Bangladah', 'Dhaka']);

console.log(scornaN);

const aplyMathod = [10, 20, 30, 40, 50, 60];

const wentProses = Math.max.apply(null, aplyMathod);

console.log(wentProses);
