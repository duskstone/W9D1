function Surrogate() {}

Surrogate.prototype = SuperClass.prototype;
Subclass.prototype = new Surrogate();
Subclass.prototype.constructor = Subclass;

Surrogate.prototype.inherits = function(child, parent) {
    this.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
}


function Animal(name) {
    this.name = name;
}

Animal.prototype.says = function(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
}

function Dog(name) {
        this.name = name;
    }

    Dog.prototype.woof = function() {
        console.log('Woof');
    }
