//--------------------------------DAY2----------------------------------




// Q.6.What are closures?
// -A closure is the combination of a function and the lexical environment within which that function was declared.
// -a closure is the function having access to the parent scope,even after the parent function is closed.
// -example:
//                 function one(){
//                     let i=1;
//                     function two(){
//                         console.log(i);
//                     }
//                     two()
//                 }
//                 one();
// - in above example one function is accessing to the value of a variable of the two function 


// Q.7.Give an example of the closures?
// -eg:
//                 function Outer(value) {
//                     var outerVar = 100;
//                 function Inner(msg) {
//                     console.log(outerVar);
//                     console.log(value);
//                     console.log(msg);
//                 }
//                 return Inner;
//                 }
//                 var innerFunc=OuterFun('hi');
//                 innerFunc('welcome');
// -As per the above code, InnerFun() has access to the variables in the OuterFun()
//   scope even after the outer function has returned.



// Q.8.Explain call(), apply() and, bind() methods?
//     a)Call: The call() method invokes a function with a given this value and arguments provided one by one
//     -example:
//             var name1 = { name: "abhi", color: "white" };
//             var name2 = { name: "sai", color: "black" };
//             function friend(value1, value2) {
//             console.log(value1 + " " + this.name + " " + value2 + ", " +this.color );
//             }
//             friend.call(name1, "my", "is"); 
//             friend.call(name2, "my", "is"); 
//     b)Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
//     -eg:
//              var name1 = { name: "abhi", color: "white" };
//             var name2 = { name: "sai", color: "black" };
//             function friend(value1, value2) {
//             console.log(value1 + " " + this.name + " " + value2 + ", " +this.color );
//             }
//             friend.apply(name1,["my","is"]); 
//             friend.apply(name2,["my","is"]); 
//     c)bind: returns a new function, allowing you to pass any number of arguments.and this new function we can call it anytime and anywhere
//     -example:
//             var name1 = { name: "abhi", color: "white" };
//             var name2 = { name: "sai", color: "black" };
//             function friend(value1, value2) {
//             console.log(value1 + " " + this.name + " " + value2 + ", " +this.color );
//             }
//             let newValue1= friend.bind(name1);
//             let newValue2= friend.bind(name2);
//             newVlaue1("my","is");
//             newValue2("my","is");


// Q.9.What is the creation phase and execution phase?
//  -Global execution context it is the first execution context that is created by js engine
//   before any code is executed.(when the file first load in the browser)
// -it has 2 phases:
//     1)Creation phase:
//         -this phase allows us to allocate memmory to all the variables but real value will not be assigned,
//          only value is assigned as 'undefined'
//          -example:
//           var a = undefined;
//     2)Execution phase:
//         -In this phase variables will get assigned to there real values and 
//          the function will get executed when some one calls it. 
//          -example:
//           var a = 4;



// Q.10.What are objects in javascripts?
// -In JavaScript, an object is an unordered collection of key-value pairs.
// -Each key-value pair is called a property.
// -The key of a property can be a string And the value of a property can be any value.
//  e.g., a string, a number, an array, and even a function.
// -JavaScript provides you with many ways to create an object.The most commonly used one is to use the object literal notation.
// -The following example creates an empty object using the object literal notation:
//    let empty = {};
// -To create an object with properties, you use the key:value within the curly braces.
// -For example, the following creates a new person object:
//                 let person = {
//                     firstValue: 'hello',
//                     secondValue: 'World'
//                 };
//  -objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs.
//  -These keys can be variables or functions and are called properties and methods


 
// Q.11.What are function constructors?
// -The constructor method is a special method for creating and initializing an object created within a class.
// - If you do not specify a constructor method, a default constructor is used.
// - The example usage of constructor would be as below,
//                 class Employee {
//                 constructor() {
//                     this.name = "Abhi";
//                 }
//                 }
//                 var employeeObject = new Employee();
//                 console.log(employeeObject.name); 
// -A constructor is a function that creates an instance of a class which is typically called an “object”.
// -In JavaScript, a constructor gets called when you declare an object using the new keyword.
// -The purpose of a constructor is to create an object and set values if there are any object properties present.



// Q.12.Explain prototypes?
// -A prototype is a blueprint of an object.
// -Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.
// -prototype Object will be created inside the object which refers to the prototype constructor
// -example:
//                 const parentObject={
//                     name:"Abhi",
//                     age:23,
//                 }
//                 var childObject=Object.create(parentObject)
//                 console.log(parentObject.name);
//                 console.log(childObect.name);


// Q.13.What is prototype chaining?
// -Prototypes are the means of inheritance in JavaScript.
// -The prototype of an object would also have a prototype object.
// -This continues until we reach the top level when there is no prototype object.
// -This is called prototype chaining or prototype chain in JavaScript.
// -When we try to access any property of an object it is first checked in the own property of the object.
// -If the property does not exist in the own property then the prototype object is scanned for that property.
// -This continues until we get the property we are accessing or we reach at to the end of prototype chain giving undefined.
// -example-
//                 function Person() {
//                     this.name = 'Abhi'
//                 }
//                 // adding property 
//                 Person.prototype.name = 'Sai';
//                 Person.prototype.age = 23
//                 const person1 = new Person();
//                 console.log(person1.name); 
//                 console.log(person1.age); 



// Q.14.Give an examples of inheritance using function constructor?
// -In JavaScript, a prototype can be used to add properties and methods to a constructor function.
// -And objects inherit properties and methods from a prototype.
// -example:
//                 // constructor function
//                 function Person () {
//                     this.name = 'Abhi',
//                     this.age = 23
//                 }
//                 // creating objects
//                 const person1 = new Person();
//                 const person2 = new Person();
//                 // adding property to constructor function
//                 Person.prototype.gender = 'male';
//                 // prototype value of Person
//                 console.log(Person.prototype);//{ gender: "male" }
//                 // inheriting the property from prototype
//                 console.log(person1.gender);
//                 console.log(person2.gender);



// Q.15.What are callbacks?
// -Callbacks is the function which is passed as an argument to the another function.
// -This function is invoked inside the outer function to complete an actions.
// -example:
//             function callBackFunction(name) {
//             console.log("Hello " + name);
//             }
//             function outerFunction(callback) {
//             let name = prompt("Please enter your name.");
//             callback(name);
//             }
//             outerFunction(callBackFunction);



// Q.16.What is the use of setTimeout?
// -It is method used to call a function after specified number of time in milliseconds.
// -example-
//             setTimeout(function(){
//                 console.log('Good  morning');
//             },1000)



// Q.17.What is the event loop and call stack?
// -if there is a synchronous code it will run into the call stack but if there is asynchronous code(setTimeout) the it will detected by browser and it will run in web apis.
// -then if asynchronous code will complete execution then it goes into callqueue then event loops comes in and
// -If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack.
// -If the callback queue is empty, nothing will happen
// -example:
//             function myValue(){
//                 let a='hello';
//                 let b='bye';
//                 console.log(a);
//                 setTimeout(function(){
//                     console.log(b);
//                 },2000);
//             }
//             myValue()
//             console.log('hi');
//  