class Person {
  public name: string;          // accessible everywhere
  private age: number;          // accessible only inside this class
  protected email: string;      // accessible in this class + subclasses

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public showInfo(): void {
    console.log(`${this.name}, ${this.age}, ${this.email}`);
  }
}

class Student extends Person {
  showEmail(): void {
    console.log(`Student email: ${this.email}`); //  allowed (protected)
    // console.log(this.age); //  Error: 'age' is private
  }
}

const s = new Student("Alice", 21, "alice@example.com");
console.log(s.name);  
// console.log(s.age); 
// console.log(s.email); 
s.showInfo();           
