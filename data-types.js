// Javascript notes
/*
Multi-line comment: alt - shift - a

JS was founded in 1996 by Brandon Eich
- client side language (runs in the browser)
- interpreted, not compiled
- first class function - functions are treated like any other variable
- prototype-based Object Oriented
- ECMAScript is an organization setting language standards

Blocks of code that are not being interpreted
Denoted by // for single line
Denoted by /* for multi line
Comments get read but are not executed
As students , it helps us takes notes
As devs, it documents our code making it more maintainable
*/

// Data Types
/*
* String
* Number
* Boolean
* Null
* Undefined
* notAnumber (NaN)
Reference
* Array
* Object
console.log("Hello world")
 */

/* String: primitive data type representing characters (text) enclosed in '' or ""
Examples:*/

console.log("This is a text")
    // returns string
console.log(typeof "Text")
    // returns boolean
    // console.log(typeof 25)
    // returns number

// we can add (concatenated) strings

console.log("Paul" + "Niemczyk")
console.log("Paul" + "Niemczyk" [0])
    // strings are immutable but their characters are inexed, beginning at 0

// string interpolation example:
console.log("The sum of two and two is:", 2 + 2)

// 'The sum of two and two' is a parameter, 2+ 2 is the argument

console.log('The sum of two and two is ${2 + 2}.')




// Numbers
console.log(25)
console.log(3.14)
console.log(0.2 + 0.1)
    // see Discord for further explanation
console.log(010)
    // returns 8. Precluding zero is for octet numbering system

// Booleans
/* Two values: true (on) or fales (off)
Examples of falsey values:
* empty string ""
* 0
* undefined
* null
Most common return statement for checking something, ex: using comparison operator
 */

console.log(2 == 2)
    // returns true
console.log(2 == "2")
    // returns true
    // The above example is due to Type Coercion
    /* JS is a weakly typed programming language. It doesn't require data type definition. For that reason, if it quacks like a duck, it's a duck */

//Multi Line Strings
// Done using escape character "\n"
console.log("This string is \n multiline.")


/*
*Addition (+)
*Subtraction (-)
*Multiplication (*)
*Division (/)
*Exponent (**)
*Dot (.)
*Assignment (=)
*Comparison (==)
*Strict Comparison (===)

Assignment: assigns something to something (ex: value to variable)
Comparison - traditional equal sign. Checks if the left value is equal to right value. Does not care for data types.
Strict comparison checks for values and data type.
*/

let nyName = "Paul"
console.log(myName)
console.log(5 == 7)
console.log(5 == "5")
console.log(5 === "5")

// Expressions - unprocessed values within (). Covered in conditionals.