//Variables


/* Containers that store data in memory.
- declaration
    *allows memory space to be reserved
    *declarations start let, var, or const;
    *declarations cannot start with a number, or most characters other than $ or .
    * if no value is assigned, it's undefined
- initialization
    * assigning it a value
    * can be an value or data type (str, int, array, fx, class, etc.)
    * can be reassigned (except for const)
*/


let firstName;;
console.log(firstName)

let lastName = "Niemczyk";
console.log(lastName)

let age = 25;
console.log(age)

console.log("Value of firstName before reassignment" + firstName)
    //Reassignment
firstName = "Paul"
console.log(`Value of firstname after reassignment ${firstName}`)

console.log(firstName)

let $lastName;;
let _lastName;;

// string interpolation requires backtick (key where tild is)


// (a) (b) (c) (d)
var address = "123 Main St, Salem, MA"
console.log(address)
    // (a) keywork
    // (b) variable identifier
    // (a) & (b) - variable declaration
    // (c) assignment operator
    // (d) value or initializer

const className = "SDB September 2022"
console.log(className)

// className = "New Class" // TypeError: const cannot be reassigned

/* className.toUpperCase()
console.log(className)

address.toUpperCase()
console.log(address)

address = address.toUpperCase() */

// below code reassigns the value of address variable to what .toUpperCase method returns when it acts on address value
address = address.toUpperCase()
console.log(address)

// Below code console.logs ONLY what address would look likw with .toUpperCase method acting on it
console.log(address.toUpperCase())

// Reassignment doesn't have to happen on original variable. What if we wanted a new variable that's a copy of the original variable but all uppercase?

let addressUS = address.toUpperCase();


//? Coding practices for variables
/*
  * be concise (ex: firstName instead of usersFirstName
  * be specific (ex: getValue instead of i)
  * Utilize camelCase, snake_case, PascalCase, or skewer-case (best practice is to use camelCase)
  * You can also utilize nocase or SCREAMING_CASE

*/

//Challenge:
/* Set a few variables:
 */

let fName = "Sidney";;
let lName = "Durmick";
let houseNumber = 33;
let apt = "d";
let street = "Mulholland Drive";
let city = "San Jose";
let state = "CA";
let zip = "90210";
console.log(`My address is ${houseNumber}`);
console.log("My address is " + houseNumber + apt + street);
// console.log(fName, lName, houseNumber, street, city, state, zip)

let completeAddress = `My home address is ${houseNumber} ${street} ${city} ${state} ${zip}`
let completeAddressconc = 'My home address is:' + houseNumber + " " + street + zip
console.log(completeAddress)
console.log(completeAddressconc)