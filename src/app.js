class Drone{
    constructor(id = "", name="drone"){
        this._id = id; //assigning to _id means it is private
        this.name = name;
        console.log(`droneId - ${id}, droneName - ${name}`);
    };

    static getCompany(){
        console.log("Comapny Name is RoboticsBD");
        //console.log(this.id); //this.id does not exist because this function does not
                              //belong to any instances
    };
    //this is a instance method, all instance has access to this method
    fly(){
        console.log(`Drone - ${this.id} is flying `);
    }

    //getters and setters
    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }
}
Drone.maxHeight = 2000;

let drone1 = new Drone("A123", "Flyer"); 
let drone2 = new Drone("B456", "Rocket");

//*only accessable by the class not by its instance
//--Static properties are only accessable by class
console.log(Drone.maxHeight); //maxHeight property is only available to class 
//console.log(drone1.maxHeight); // returns undefined
//--static functions are also only accessable by class
Drone.getCompany();// prints Company Name is RoboticsBD
//drone1.getCompany();// throws an error is not a function
//Drone.fly();// this will throw error as this is a instance method
//*end of only accessible by class


drone1.fly();
//calling getter & setters
let id1 = drone1.id; //this will invoke the get id() method
drone1.id = "A012"; //this will invoke the set id() method and set the id with value

console.log(drone1.id);