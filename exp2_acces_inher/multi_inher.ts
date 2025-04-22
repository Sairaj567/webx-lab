// Base class
class Animal {
    eat(): void {
        console.log("This animal eats food.");
    }
}

// Derived class 1
class Mammal extends Animal {
    walk(): void {
        console.log("This mammal walks on land.");
    }
}

// Derived class 2
class Dog extends Mammal {
    bark(): void {
        console.log("The dog barks.");
    }
}

// Example usage
const myDog = new Dog();
myDog.eat();  // From Animal class
myDog.walk(); // From Mammal class
myDog.bark(); // From Dog class