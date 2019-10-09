/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The global binding princle is that "this" will have a value of the window/console object if used in the global scope.
* 2. In the inplicit binding principle, the value of this is determined by whichever object is left of the dot used to call a function.
* 3. New binding principle means that this is determined by the specific instance of the object that is created and returned by a constructor function.
* 4. The explicit binding principle overrides what the this keyword in bound to when using call, apply and bind methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
    warning: 'Beware of the',
    speak: function(animal) {
        console.log(`${this.warning} ${animal}!`);
    }
};
myObj.speak('dog');

// Principle 3

// code example for New Binding


// Principle 4

// code example for Explicit Binding