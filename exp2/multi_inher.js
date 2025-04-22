var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("This animal eats food.");
    };
    return Animal;
}());
// Derived class 1
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mammal.prototype.walk = function () {
        console.log("This mammal walks on land.");
    };
    return Mammal;
}(Animal));
// Derived class 2
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("The dog barks.");
    };
    return Dog;
}(Mammal));
// Example usage
var myDog = new Dog();
myDog.eat(); // From Animal class
myDog.walk(); // From Mammal class
myDog.bark(); // From Dog class
