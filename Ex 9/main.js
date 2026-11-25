const car = {
  make: "Hyundai",
  model: "Tucson",
  year: 2026,

  // Method
  start: function () {
    console.log("The car has started");
  }
};

// Log each property
console.log(car.make);
console.log(car.model);
console.log(car.year);

// Call the method
car.start(); // The car has started