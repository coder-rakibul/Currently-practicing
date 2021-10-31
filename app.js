"use strict";
// Provlem number 1;
function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(randomNum(6, 1));
// Provlem number two

const studentName = ["Rakibul", "Shorna", "Nusrat", "Sadia", "Sumia", "Tania", "Coiti", "Shornali"];
const sortProses = studentName.sort();
console.log(sortProses);

// Provlem Number Three

const classRoll = [11, 5, 6, 4, 3, 2, 1, 8, 7, 9, 10, 12];

const classRollSort = classRoll.sort(function(a, b){
    return a - b;
});

console.log(classRoll);

// Provlem Number Fore 

const lepear = 2020;

function leperChack(year) {
    if((year % 4 === 0) || (year % 400 === 0) && (year % 100 !== 0)){
        console.log(`${year} Year Is Leaper`);
    }else{
        console.log(`${year} Year Is't Leaper`);
    }
}

leperChack(2020);

// Provlem Five

const voial = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

function findVoialSentenc(sentenc){
    let count = 0;
    const stringToArrayCovat = Array.from(sentenc);
    stringToArrayCovat.forEach(function(value) {
        if(voial.includes(value)){
            count ++;
        }
    })
    return count;
}

console.log(findVoialSentenc("I love you"));

// Provlem Six

const myArray = [10, 11, 50, 40, 20, 10, 11, 30, 23, 50, 11];

const duplicatNumber = myArray.filter(function(value, index, array) {
    return array.indexOf(value) !== index;
});

console.log(duplicatNumber);
