/*#############################################################################
	#																																						#
	#											JAVASCRIPT MAIN TOPICS																#
	#																																						#
	#############################################################################

		####################################
		 					Primitive Types
		####################################

 		undefined, null, Srting, Number, Boolean, Symbol and BigInt
		------------------------------------------------------------
*/
/*  undefined
      # This is a value in JS
      # We can give this as a value for a variable but it is not recomended
      # If we initiate a variable and we didn't assign it a value the js engine
				will give that variable an intial value of undefined
*/
var a = undefined // NOT recomeneded, but we can
var b // Because we haven't set a value first, the engine will evaluates it as
			// undefined
console.log(a)
console.log(b)
/*  null
      # This is also a primitive value
      # We use this value when we don't know the type of value the variable is
				going to hold.
*/
var c = null
console.log(c)

/*  String
      # A string is any set of characters that are put in single ('') or double
				quote ("")
      # It has some properties like length, concat, split, splice etc...
*/
var d = ''
var str1 = 'This is a String'
var str2 = 'Hello,'
console.log(str1.length)
console.log(str1.split(' ')) // Splits the string at every space and create a
														//new array with each word as a value
console.log(str1 + ' ' + str2)

/*  Number
      # Are primitive values
      # Are floating point
      # has also properties like
        . MAX_SAFE_INTEGER  // is 9007199254740991
        . MIN_SAFE_INTEGER  // is -9007199254740991
        . NaN  // Not a Number
*/
var num1 = 10,
	num2 = -5,
	pi = 3.14159265
console.log(num1)
console.log(num1 + num2)
console.log(num1 * num2)
console.log(num1 < num2)

/*  Boolean
      # A boolean has only two values (true or false)
      # Can be a result of an expression or a signed value
*/
var e = true,
	f = false
console.log(e || f)
console.log(e && f)
console.log(undefined < null) // etc...

/*  Symbol
      # Is a new primitive type introduced since ES6
      # Symbol is a built-in object whose constructor returns a symbol
        primitive — also called a Symbol value or just a Symbol — that’s
        guaranteed to be unique. Symbols are often used to add unique
        property keys to an object that won’t collide with keys any other
        code might add to the object, and which are hidden from any
        mechanisms other code will typically use to access the object.
        That enables a form of weak encapsulation, or a weak form of
        information hiding.
      # Every Symbol() call is guaranteed to return a unique Symbol.
      # To create a new primitive Symbol, you write Symbol() with an
        optional string as its description:  */

let sym1 = Symbol(),
	sym2 = Symbol('foo'),
	sym3 = Symbol('foo')
let sym = new Symbol() // TypeError
Symbol('foo') === Symbol('foo') // false, because each one is unique

/* 	BigInt
			# This is introduced in ES2020(ES11)
			# Is use to represent very large numbers that are larger than the
				MAX_SAFE_INTEGER or smaller than MIN_SAFE_INTEGER
			# Is also use in scientific programs where precision is necessary
*/

const alsoHuge = BigInt(9007199254740991)   // ↪ 9007199254740991n

// More reading:
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

/*
	###################################
							Variables
	###################################

	* Variables are like a named container where we can put a single value, an
		array (list) of values,	an object or a a function that are going to called
		later in our code to access there value (content).
	*	Variables tell the computer to alocate a space in memory ahead of time.
	*	JavaScript variables are dynamic type, meaning the type of the value determes
		the type of the variable.	It is also means that type of the value can change
		at a later time
	*	variables has to be declared
	* We can not use reserved words as a variable name
	* There is a naming rule for Variables
			- A variable have to start with _, #, or a letter
			- as a convention we use camel casing in JS to name multiple word variable
				names
			- as a convention it is recomenede to use descriptive names
			- Js names are case sensitive
			- it is recomended to use small case for the first letter of our variables
				for simple variables and upper cased first letter for variables that are
				going to used as constaructor.
*/
// Variable declaration
var firstName = 'Natnael', lastName = 'Tsegaw', num = 0;
let isLoggedIn = false  // descriptive naming using camel case
let Person = { // used as constructor of the a person
	firstName: 'Naty',
	lastName: 'Zewdie',
	age: 30,
	address: {
		street: 'Africa Godana',
		city: 'Addis Ababa',
		country: 'Ethiopia',
	}
}

// More reading:
// https://developer.mozilla.org/en-US/docs/Glossary/Variable

/*
	###################################
							Opertators
	###################################
	+, -, *, /, ++, --, +=, -+, *=, /= .....
	>, <, >=, <=, ., [], (), etc ...

	#	Opertator precedence



*/


/*
	###########################################################
							Type conversion and Type Coercion
	###########################################################

	*
*/

/*
	###################################
							Boolean Logic
	###################################

	NOT(!), OR(||), AND(&&)
	*
*/

/*
	###################################
							Conditionals
	###################################

	# if else or switch statments

	#	Ternary Opertator

*/

/*
	###########################################################
							Statments and Expressions
	###########################################################

	*
*/

/*
	###########################################################
							Strict Mode JavaScript
	###########################################################

	'use Strict'; // why do we use this (need this)
	#

*/

/*
	#################################
							Functions
	#################################

	# Defination / Declaration
		- No parameter functions
		- Functions with one or more parameter(s)

	#	Function Expressions

	# What is the diffrence between function declaration and function expression

	#	Function call/ invocation/ run

	# Dry coding (Don't repeat your code)

	# A function / function call inside another function

*/

/*
	#################################
							Arrays
	#################################

	# Defination / Declaration

	#	Most common array methods
		- length
		- push('')
		- unshift('')
		- pull()
		-	shift()
		- indexOf('')
		-	includes('')	// since ES6, uses strick equality, checks if a value is
										// found inside an array


*/

/*
	#################################
							Objects
	#################################

	# Defination / Declaration

	# Dot notation Vs. Bracket notation

	#	Methods

*/



/*
	#################################
							Loops
	#################################

	# NOTE

	# For loops

	#	while | do-while

	# continue and break
		continue
			- if a condition is not fulfilled while doing a loop, then continue will
				help us to skip the current iteration and continue to the check for the
				next value in the loop. Scapes the current iteration only.

		break
			- we use this if we want to stop the iteration on loops completely and go
				to the next line of codes( out of the loop ). Stops the loop.

	# Nested loops

	#	forEach method

	# map method

*/
