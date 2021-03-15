Question2.js//Part 1 to 5
Vehicle = type => {
    this.type = type;
    Vehicle.VehicleCount ++;
}

Vehicle.prototype.drive = () => console.log("Vehicle is driving");

Vehicle.VehicleCount = 0;

// Part 6
console.log("No of Vehicles = " + Vehicle.VehicleCount);
let myVehicle = new Vehicle("Sedan");
console.log("No of Vehicles = " + Vehicle.VehicleCount);

//Part 7
Car = type => Vehicle.call(this,type);

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

//Part 8
Car.prototype.balanceWheels = () => console.log("Wheels are balanced");

//Part 9 to 12
const car = new Car("Nissan");
console.log("No of Vehicles = " + Vehicle.VehicleCount);
console.log(car.type);
car.balanceWheels();

