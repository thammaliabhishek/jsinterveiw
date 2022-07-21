
//---------------------DAY1----------------------------


// Q.1. What is the difference between == && ===?
// -JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison.
// -The strict operators take type of variable in consideration, while non-strict operators 
//  make type correction/conversion based upon values of variables. 
// -The strict operators follow the below conditions for different types,
// 1. Two strings are strictly equal when they have the same sequence of characters,
//    same length, and same characters in corresponding positions.
// 2. Two numbers are strictly equal when they are numerically equal. 
//    i.e, Having the same number value. There are two special cases in this,
//     i. NaN is not equal to anything, including NaN.
//     ii. Positive and negative zeros are equal to one another.
// 3. Two Boolean operands are strictly equal if both are true or both are false.
// 4. Two objects are strictly equal if they refer to the same Object.
// 5. Null and Undefined types are not equal with ===, but equal with ==.
//    i.e, null===undefined false but null==undefined  true
// Some of the example which covers the above cases,
// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false
// []==[] or []===[] //false, 
// {}=={} or {}==={} //false, 


// Q.2.What is the spread Operator?
// -Spread operator allows iterables( arrays / objects / strings ) to be expanded into
//   single arguments/elements.
// -pass an array of numbers as a individual function arguments.
// let arr1 = ['A', 'B', 'C'];
// let arr2 = [...array1];
// console.log(arr2);
// O/p:[ 'A', 'B', 'C' ]


// Q.3.What is the difference between var let and const?
// -In JavaScript, users can declare a variable using 3 keywords that are var, let, and const.
// -var keyword is oldest keyword and let and const are introduced in es6.
// 1.var declarations are globally scoped or function scoped while let and const are block scoped.
// 2.var variables can be updated and re-declared within its scope; let variables can be updated 
//   but not re-declared; const variables can neither be updated nor re-declared.
// 3.They are all hoisted to the top of their scope. But while var variables are 
//   initialized with undefined, let and const variables are not initialized.
// 4.While var and let can be declared without being initialized,
//   const must be initialized during declaration.



// Q.4.What is execution context?
// -The browser's JavaScript engine then creates a special environment to handle the transformation
//  and execution of this JavaScript code. This environment is known as the Execution Context.
// -The Execution Context contains the code that's currently running,
//  and everything that aids in its execution.
// -During the Execution Context run-time, the specific code gets parsed by a parser,
//  the variables and functions are stored in memory, executable byte-code gets generated,
//  and the code gets executed.
// -There are two kinds of Execution Context in JavaScript:
//             1.Global Execution Context (GEC)
//             2.Function Execution Context (FEC)


// Q.5.What is meant by first class functions?
// -A Programming Language is said to have first class function when function in that language
//  are treated like any other variable 
//         1.We can assign a function to an variable 
//         2.we can pass a function as an argument 
//         3. Function can be returned by another function
//       const firstClass = () =>console.log('first class');
//       document.addEventListner('click',firstClass);
