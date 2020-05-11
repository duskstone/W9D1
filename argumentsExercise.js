// function sum(...args){
//     return args.reduce( (acc, ele) => {
//         return acc + ele;
//     })
// }

// function sum(){
//     let args = Array.prototype.slice.call(arguments);
//     return args.reduce( (acc, ele) => {
//         return acc + ele;
//     })
// }

// // console.log(sum(1,2,3,4));

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }
    
//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Function.prototype.myBind = function(context, ...bindArgs) {
//     // debugger;
//     const that = this;

//     return function(...callArgs) {
//         return that.apply(context, bindArgs.concat(callArgs));
//     };

// };


//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   const saysMethod = markov.says.bind(pavlov);
//   console.log(saysMethod('hi','gopher'); 

  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
  // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov,"meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true

  function curriedSum(numArgs){
    let total = 0;

    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);
       if (numbers.length === numArgs) 
       { numbers.forEach(ele => total += ele); 
        return total } 
       else { return _curriedSum };
    }
  }

Function.prototype.curry = function(numArgs) {
    debugger
    const that = this;
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);
        console.log(numbers);
       if (numbers.length === numArgs) 
        { return that(...numbers) } 
       else { return _curriedSum };
    }
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  sumThree(4, 20, 6); // == 30
  const curriedSum3 = sumThree.curry(3);
  console.log(curriedSum3(4)(20)(6));

// const sum = curriedSum.curry(4);
// console.log(sum(5)(30)(20)(1));// => 56