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




function longWold(names){
    let longestWold = "";
    for(let name of names){
        if(name.length > longestWold.length){
            longestWold = name;
        }
    }
    return [longestWold, names.indexOf(longestWold)];
}


console.log(longWold(["Rakib", "Rakibul Islma", "Mr Rakibul Islma", "Shikder MD Rakibul Islma", "Rakibul Hosen"]));

function fizzBazz(number){

    for(let i = 1; i <= number; i++){
        if(i % 15 === 0){
            console.log(`${i} is fizzBazz`);
        }else if(i % 3 === 0){
            console.log(`${i} is fizz`);
        }else if(i % 5 === 0){
            console.log(`${i} is Bazz`);
        }else{
            console.log(i);
        };
    };

};

fizzBazz(100)



const array = [
    "Rakibul",
    12,
    "Bangladash",
    false,
    "Softwor Enginiar",
    true,
    NaN,
    "Thanks",
    undefined
];

const proses = array.filter(function(element){
    if(element){
        return true;
    }else{
        return false;
    }
});
console.log(proses);

// Defolt

const proses2 = array.filter(Boolean);
console.log(proses2);

const object = {
    name: "Rakibul",
    id: 1012,
    pro: false,
    addras: "Bangladash",
    profation: "Freelncer",
    well: true,
    deffrent: undefined
};

const trueObject = function (object){
    for(let i in object){
        if(!object[i]){
            delete object[i]
        }
    }
    return object
};

console.log(trueObject(object));
