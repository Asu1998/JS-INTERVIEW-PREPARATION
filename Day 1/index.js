// JAVASCRIPT Interview Questions Day 1 -

// var a = 10;
// function add(num){
//     return num*num;
// }
// const store = add(10);
// console.log(a);
// console.log(store);

// Q1. Difference between “ == “ and “ === “ operators.

// "==" operator is a comparison operator that checks only the values of two variables. It returns the output in true or false.
// "===" operator is a comparison operator that checks both the values as well as the datatype of two variables. It returns the output in true or false.

// Q2. What is the spread operator?

// Spread Operators were first introduced in ES6 version. It is represented using (...) and it allows us to quickly copy all or part of an existing array or object into another array or object.

let arrOne = ["a","b","c"]
let arrTwo = [1,2,3]
console.log(...arrOne,...arrTwo);//a b c 1 2 3

// Q3. What are the differences between var, let and const?

// var,let and const are 3 keywords that are used to declare a variable in Javascript. var came in earlier version of ES whereas let and const came into effect from ES6 onwards

// let-
// 1. let can be declared on one line and initialise on the next line or within the same line itself.
// 2. Two variables having same names are not possible in let.
// 3. We can reassign or update the values of the variable which have already been initialised.
// 4. let is block scoped.
// 5. let doesn't support hoisting.

// Const-
// 1. Constant or Const can be declared and initialise on the same line itself.
// 2. Two variables having same names are not possible in const.
// 3. We cannot reassign or update the values of the variable which have already been initialised.
// 4. Const is block scoped.
// 5. Const doesn't support hoisting.

// Var-
// 1. var can be declared on one line and initialise on the next line.
// 2. Two variables having same names are possible in var.
// 3. We can reassign or update the values of the variable which have already been initialised.
// 4. var is global scoped.
// 5. var supports hoisting.

// Q4. What is execution context ?

// The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.

// The Execution Context contains the code that's currently running, and everything that aids in its execution.

// During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.

// There are two kinds of Execution Context in JavaScript:

// Global Execution Context (GEC)
// Function Execution Context (FEC)

// 1. Memory Allocation Phase or the Creation Phase- Here,the variable will not be initialised, intead it will take default value as undefined.
// 2. Code Execution Phase or the Thread of Execution- Here, the variable will be assigned with its true values i.e, undefined will be replaced with the true values.

// Q5. What is creation phase and execution phase?

// 1. Memory Allocation Phase or the Creation Phase- Here,the variable will not be initialised, intead it will take default value as undefined.Some Memory is allocated to the variable.
// 2. Code Execution Phase or the Thread of Execution- Here, the variable will be assigned with its true values i.e, undefined will be replaced with the true values.

// Q6. What are closures? Give an example of closure.

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function outerFunction() {
    let a = 5;

    function innerFunction(){
        console.log(a);
    }
    innerFunction();
}
outerFunction();//5