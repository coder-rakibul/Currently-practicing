"use strict";

// class Car{
//     constructor(brand){
//         this.carName = brand;
//     };
//     myCar(){
//         return "I have a " + this.carName;
//     };
// };

// class Modale extends Car {
//     constructor (brand, modle){
//         super(brand)
//         this.modleName = modle;
//     };
//     carModle(){
//         return this.myCar() + "." + " this modle name is " + this.modleName;
//     };
// };


// const findCarName = new Modale("Rolax", 1234);

// console.log(findCarName.carModle());

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  
  console.log(myCar.show());




  