//-------------------------DAY3----------------------


// Q.18. What are promises and why do we need them?
// -Promises are used to handle asynchronous operations in JavaScript.
// -They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 
// -Benefits of Promises: 
// 1.Improves Code Readability
// 2.Better handling of asynchronous operations
// 3.Better flow of control definition in asynchronous logic
// 4.Better Error Handling
// -A Promise has four states: 
// 1.fulfilled: Action related to the promise succeeded
// 2.rejected: Action related to the promise failed
// 3.pending: Promise is still pending i.e. not fulfilled or rejected yet
// -A promise can be created using Promise constructor.
// Syntax
// var promise = new Promise(function(resolve, rej){
//      
// });
// eg:
// const promiseValue = new Promise(
//   (resolve) => {
//     setTimeout(() => {
//       resolve(" Promise Value!");
//     }, 2000);
//   },
//   (rej) => {}
// );
// promiseValue.then((val) => console.log(val));



// Q.19. What is the purpose of async/await keywords?
// -It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread.
// -It operates asynchronously via the event-loop. Async functions will always return a value.
// eg: 
// const getDataValue = async() => {
//     var dataValue = "Hello There I am Abhishek";
//     return dataValue;
// }
// getDataValue().then(dataValue => console.log(dataValue));
// ----Await--->: Await function is used to wait for the promise. It could be used within the async block only.
// - It makes the code wait until the promise returns a result. It only makes the async block wait.
// eg
// const getDataValue = async() => {
//     var a = await "Hello There i am Abhishek";
//     console.log(a);
// }
// console.log(1);
// getDataValue();
// console.log(2);



// Q.20. What is hosting?
// -hoisting allows us  to use functions and variables before they're declared.
// -Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
// -It allows us to call functions before even writing them in our code. 
// -JavaScript only hoists declarations, not the initializations.
//  eg:
// function HoistValue(){
// 	a = 1;
// 	let b = 160;
// }
// HoistValue();
// console.log(a); 
// console.log(b); 



// Q.21. What is the DOM?
// -The document object represents the whole html document.
// -When html document is loaded in the browser, it becomes a document object.
// -It is the root element that represents the html document. It has properties and methods. 
// -By the help of document object, we can add dynamic content to our web page.
// 5. Difference between undefined vs not defined vs NaN:
// -The undefined property indicates that the variable has not been assigned a value or not declared at all. 
// -The NaN property represents a “Not-a-Number” value. The NaN property indicates that a value is not a legitimate number. 
// -not defined: In JavaScript, it is one of the reference errors that JavaScript will throw when someone accesses the variable which is not inside the memory heap.




// Q.22. How many operators do we have in JS ?
// -An operator is used for manipulating a certain value or operand. 
// -Operators are used to perform specific mathematical and logical computations on operands.
// 1.Arithmetic Operators
// 2.Comparison Operators
// 3.Bitwise Operators
// 4.Logical Operators
// 5.Assignment Operators



// Q.23. What are pure functions?
// -A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
// -It does not depend on any state or data change during a program’s execution.it only depends on its input arguments.
// eg:
// function sum( value ) {
//     return value + 1;
// }
//sum(2)



// Q.24. What is callback hell?
// -Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
// -Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code



// Q.25. What is promise chaining?
// -Promise chaining allows us to control the flow of JavaScript asynchronous operations.
// -By using Promise chaining, we can use the returned value of a Promise as the input to another asynchronous operation.
//  10. What are arrow functions?
//  -Arrow functions are anonymous functions (the functions without a name and not bound with an identifier).
//  -They don't return any value and can declare without the function keyword. 
//  -Arrow functions cannot be used as the constructors. 
//  -The context within the arrow functions is lexically or statically defined. They are also called as Lambda Functions
//  syntax:
//  const functionNameValue = (arg1, arg2, ?..) => {  
//     operation of code
// } 



// Q.26.Give an example of async/await?
//---------async---->
// const getDataValue = async() => {
//     var dataValue = "Hello There I am Abhishek";
//     return dataValue;
// }
// getDataValue().then(dataValue => console.log(dataValue));
// ----Await--->: Await function is used to wait for the promise. It could be used within the async block only.
// - It makes the code wait until the promise returns a result. It only makes the async block wait.
// eg
// const getDataValue = async() => {
//     var a = await "Hello There i am Abhishek";
//     console.log(a);
// }
// console.log(1);
// getDataValue();
// console.log(2);