class Parent {
    greet(): void {
        console.log("Hello from the Parent class!");
    }
}

class Child extends Parent {
    display(): void {
        console.log("This is the Child class.");
    }
}

// Example usage
const child = new Child();
child.greet(); // Inherited method from Parent
child.display(); // Method from Child