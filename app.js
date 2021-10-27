'use stric';
const employ = {
    "name": [
        {"firstName": "Rakibul", "lastName": "Islam"},
        {"firstName": "Shorna", "lastName": "Islam"},
        {"firstName": "Samoli", "lastName": "Islam"}
    ]
};
// Loop
employ.name.forEach(function(value){
    console.log(value);
});
// W3School Refarance
const json = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
}

// No responsc with loop

const myInfo = {
    "name": "Rakibul",
    "id": 120,
    "addras": "Bangladash",
    "myInfo": {
        "firstName": "Rakibul",
        "lastName": "Islam"
    },
    "herInfo": {
        "firstName": "Shorna",
        "lastName": "Islam"
    }
};

for (const key in myInfo) {
    console.log(myInfo[key]);
}

// Dont responce with loop

let textJson = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const textToJavaScript = JSON.parse(textJson);

textToJavaScript.employees.forEach(function(value){
    console.log(value.firstName + " " + value.lastName);
})


const myPost = {name: "Rakibul"};

const proses = JSON.stringify(myPost)
console.log(proses);