'use stric';

const number = [4, 3, 5, 4, 3, 2, 9, 10, 8, 5];

const dublicatSearch = number.filter(function(value, index, array){
    return array.indexOf(value) !== index
});

console.log(dublicatSearch);


