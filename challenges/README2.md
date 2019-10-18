Describe the biggest difference between .forEach & .map.

ForEach is used when you need to iterate over data
.Map is used to manipulate and create new data instead of altering  the original 


What is the difference between a function and a method?

A method is a function that belongs to an object. Everything in JavaScript is an object; a function is an object; an Array is an object

What is closure?

In JS, closure is created everytime a function is created. A closure gives you access to an outer function's scope from an inner function. 

Describe the four rules of the 'this' keyword.

Window Binding - if none of the other rules apply the this keyword defaults to the window object. Unless you are in strict mode in which case it's undefined 

-Implicit Binding 
most common rule
when the function is invoked look to the left of the dot - that's what the this keyword is referring to
only applies to objects with methods 

-Explicit Binding 
call - will immediately invoke the function / .call pass arguments in one by one
apply - will immediately invoke the function / .apply pass the arguments in as an array
bind - you pass arguments in one by one but it does not immediately invoke the function. It returns a brand new function that can be invoked later. 
all of the above allow us to explicitly state what the this keyword is in any given function 

-New Binding - using the new keyword constructs a new object and this points to it. 


Why do we need super() in an extended class?

super allow the use of attributes and methods from the extended class
/super and extend combinded do what parent.call and object.create did