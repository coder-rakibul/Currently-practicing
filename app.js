// "use strict";

// class Car{
//     constructor(brand){
//         this.carName = brand;
//     };
//     myCar(){
//         return "I have a " + this.carName;
//     };
// };

// class Modale extends Car {
//     constructor (brad, modle){
//         super(brad)
//         this.modleName = modle;
//     };
//     static carModle(){
//         return this.myCar() + "." + " this modle name is " + this.modleName;
//     };
// };


// const findCarName = new Modale("Rolax", 1234);

// console.log(Modale.carModle());

// // class Car {
// //     constructor(brand) {
// //       this.carname = brand;
// //     }
// //     present() {
// //       return 'I have a ' + this.carname;
// //     }
// //   }
  
// //   class Model extends Car {
// //     constructor(brand, mod) {
// //       super(brand);
// //       this.model = mod;
// //     }
// //     show() {
// //       return this.present() + ', it is a ' + this.model;
// //     }
// //   }
  
// //   let myCar = new Model("Ford", "Mustang");
  
// //   console.log(myCar.show());

class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(name) {
      return "My car name is " + name + this.name;
    }
  }
  
  let myCar = new Car("Ford");
  
  // You can calll 'hello()' on the Car Class:
  console.log(Car.hello("Rolax "))


  