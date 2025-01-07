// Defining the Person class
class Person {
   
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  

  const person1 = new Person('virat kohli', 30, 'india');
  const person2 = new Person('rohit sharma ', 35, 'india');
  
  
  console.log("Person 1 Details:");
  person1.displayDetails();
  
  console.log("\nPerson 2 Details:");
  person2.displayDetails();


//   question 2


// Define the Rectangle class
class Rectangle {

    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  const myRectangle = new Rectangle(5, 10);
  
 
  console.log("Area of the rectangle:", myRectangle.calculateArea());      
  console.log("Perimeter of the rectangle:", myRectangle.calculatePerimeter()); 
  
// question 3

// Define the Vehicle class
class Vehicle {
    // Constructor to initialize make, model, and year
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Method to display vehicle details
    displayDetails() {
      console.log(`Vehicle Details: ${this.year} ${this.make} ${this.model}`);
    }
  }
  
  // Define the Car subclass that extends Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
  

    displayDetails() {
      console.log(`Car Details: ${this.year} ${this.make} ${this.model} with ${this.doors} doors`);
    }
  }
  
  const myVehicle = new Vehicle("Toyota", "Corolla", 2020);
  myVehicle.displayDetails();
  

  const myCar = new Car("Honda", "Civic", 2022, 4);
  myCar.displayDetails(); 
  
//   question 4

// Define the BankAccount class
class BankAccount {
    // Constructor to initialize account number and balance
    constructor(accountNumber, balance = 0) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    // Method to deposit money into the account
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Deposit amount must be greater than zero.");
      }
    }
  
    // Method to withdraw money from the account
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Withdrawal amount must be greater than zero.");
      }
    }
  
    // Method to display the account details
    displayAccountDetails() {
      console.log(`Account Number: ${this.accountNumber}, Balance: $${this.balance}`);
    }
  }
  
  const account1 = new BankAccount("12345", 500);
  const account2 = new BankAccount("67890", 1000);
  

  account1.displayAccountDetails();  
  account2.displayAccountDetails();  
  

  account1.deposit(200);  
  account2.deposit(500); 
  

  account1.withdraw(150); 
  account2.withdraw(2000); 

  account1.displayAccountDetails(); 
  account2.displayAccountDetails();  
  
//   question 5
// Define the Shape class
class Shape {
    // Constructor to initialize shape type
    constructor() {
      if (this.constructor === Shape) {
        throw new Error("Cannot instantiate the Shape class directly.");
      }
    }
  

    calculateArea() {
      throw new Error("Method 'calculateArea()' must be implemented.");
    }
  }
  

  class Circle extends Shape {
    
    constructor(radius) {
      super();
      this.radius = radius;
    }
  

    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
 
  class Triangle extends Shape {
  
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  

  const circle = new Circle(5);
  
 
  console.log("Area of Circle:", circle.calculateArea()); 
  

  const triangle = new Triangle(10, 6);
  
  
  console.log("Area of Triangle:", triangle.calculateArea());

//   question 6

  // Define the Employee class
class Employee {
  
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  

    calculateAnnualSalary() {
      return this.salary * 12;  
    }
  }
  
  // Define the Manager subclass that inherits from Employee
  class Manager extends Employee {
  
    constructor(name, salary, department) {
      super(name, salary); 
      this.department = department;
    }
  
    calculateAnnualSalary() {
      const baseSalary = super.calculateAnnualSalary();
      const bonus = 5000;  
      return baseSalary + bonus;  
    }
  }
  

  const manager1 = new Manager("darshan", 6000, "Sales");
  const manager2 = new Manager("dhrumi", 7000, "Marketing");
  

  console.log(`${manager1.name}'s Annual Salary: $${manager1.calculateAnnualSalary()}`);
 
  
  console.log(`${manager2.name}'s Annual Salary: $${manager2.calculateAnnualSalary()}`);

//   question 7
// Define the Book class
class Book {
    constructor(title, author, publicationYear) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
    }
  

    displayDetails() {
      console.log(`Book Details:\nTitle: ${this.title}\nAuthor: ${this.author}\nPublication Year: ${this.publicationYear}`);
    }
  }
  

  class Ebook extends Book {
   
    constructor(title, author, publicationYear, price) {
      super(title, author, publicationYear);  
      this.price = price;
    }
  

    displayDetails() {
      console.log(`Ebook Details:\nTitle: ${this.title}\nAuthor: ${this.author}\nPublication Year: ${this.publicationYear}\nPrice: $${this.price}`);
    }
  }

  const myEbook = new Ebook("JavaScript for Beginners", "John Doe", 2023, 15.99);
  

  myEbook.displayDetails();

//   question 8
// Define the Animal class
class Animal {
    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.species} makes a sound: ${this.sound}`);
    }
  }
  
  // Define the Dog subclass that inherits from Animal
  class Dog extends Animal {
    constructor(species, sound, color) {
      super(species, sound); 
      this.color = color;
    }
  
    makeSound() {
      console.log(`${this.species} of color ${this.color} makes a sound: ${this.sound}`);
    }
  }
  
  const myDog = new Dog("Dog", "Woof", "Brown");


  
  myDog.makeSound();

  