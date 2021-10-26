'use stric';

const number = ['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", 'O', 'U'];

function mufunc(sentenc){
    let count = 0;
    const stringConvat = Array.from(sentenc);
    stringConvat.forEach(function(value){
        if(number.includes(value)){
            count++;
        }
    })
    return count;
}

console.log(mufunc("I love my cuntry"));

