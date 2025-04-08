const person = {
    firstName: "Kate",
    lastName: "Vansauskaite",
    age: 27,
    city: "Odessa",
    country: "Ukraine",
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName}`);
        console.log(`My second name is ${this.lastName}`);
        console.log(`I'm ${this.age} years old`);
        console.log(`I'm from ${this.city} , ${this.country}`);
    }
}
person.sayHello();  