class Vehicle{
    //this constructor is called by its child class
      constructor(licenseNo){
          this.licenseNo = licenseNo;
          this.hasGps = true; //this is treeated as instance variable 
      }

      static companyName(){
          //static method can not use instance variables coz they can be called without instances
          console.log("comapny name is Vehicle Manufacturer");
      }
      
}

class Drone extends Vehicle{
   constructor(){
       super();
       this.canFly = true;
   }
}

class Car extends Vehicle{

    constructor(licenseNo){
        super(licenseNo); // without calling the super constructor it will give an error to define own constructor
    }

    get license(){
        return this.licenseNo; //this variable is accessed from super class
    }

    set license(newLicenseNo){
        this.licenseNo = newLicenseNo;
    }
}

Drone.companyName(); //base class methods can be called by sub class only not by any instance
let drone1 = new Drone();
console.log(drone1.canFly);
let car1 = new Car("A123");
car1.licenseNo = "B456";

console.log(car1.license);
console.log(car1.hasGps);