class Vehicle{
    static VehicleCount=0;

    constructor(type) {
        this.type = type;
        Vehicle.VehicleCount++;
    }

    drive(){
        console.log(this.type + " Vehicle is driving");
    }
}

console.log("No of Vehicles = " + Vehicle.VehicleCount);
let myVehicle = new Vehicle("Sedan");
myVehicle.drive();
console.log("No of Vehicles = " + Vehicle.VehicleCount);

class Car extends Vehicle {
    constructor(type) {
        super(type);
    }

    balanceWheels() {
        console.log(this.type + " Wheels are balanced");
    }
}

const car = new Car("Nissan");
console.log("No of Vehicles = " + Vehicle.VehicleCount);
console.log(car.type);
car.balanceWheels();

//Using get and set keywords
class Square{
    constructor(length) {
        this.height = length;
        this.width = length;
    }

    get area(){
        return this.height*this.width;
    }

    set area(a){
        this.height = Math.sqrt(a);
        this.width = Math.sqrt(a);
    }
}

let square1 = new Square(4);
console.log(square1.area);
square1.area = 9;
console.log(square1.area);