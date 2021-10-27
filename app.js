const myPoro = `Rakibul Software is a software comparny in Bangladash. it's very big largias comprny.
                Rakibul Software Athor names is Rakibul Islam. He is a very jinias and lajant boy.
                Her youube channal names is Rakibul Tachnology
`;

const machChake = myPoro.match(/Rakibul/ig);
const lanthOfNumber = machChake ? machChake.length : 0;
console.log(lanthOfNumber);
// Rakibul world in Index number
const myProses = myPoro.search(/Rakibul/i);
const chackIndex = myProses >= 0 ? myProses : "Not found";
console.log(chackIndex);


// Secend Provelm

let array = [
    "Rakibul",
    "Tisa",
    "Nusrat",
    "Sada",
    "Fatama"
];

for(let x = 0; x < array.length; x++){
    console.log(array[x]);
}

function myName(array, value){
    let length = array.length;
    for(let x = 0; x < length; x++){
        if(array[x] === value){
            return x;
        };
    };
    return "Not found!";
};
console.log(myName(['a', 'b', 'c', 'd'], 'c'));

