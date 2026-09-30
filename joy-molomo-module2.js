// Challenge 1: Explain var, let, and const

// Data Type: String 
// Using const because my full name will not change while the program runs.
const fullName = "Joy Molomo"; 

// Data Type: Number
// Using const because my current age remains the same during program execution.
const age = 22;

// Date Type: Boolean
// Using let because my opinion could change in the future.
let enjoysJavaScript = true;

// Data type: Number (decimal/floating point number)
// Using let because a favourite temperature could change.
let favouriteTemperature = 22.5;

// Data Type: NaN (Not-a-number)
// Using const because this value is intentionally created and will not change.
const invalidNumber = Number("hello");

// Data Type: Infinity 
// Using const because the calculated value does not need reassignment.
const infiniteValue = 1 / 0; 

// Data Type: Number 
// Using const because Number.MAX_SAFE_INTEGER is a built-in constant value.
const maxSafeInteger = Number.MAX_SAFE_INTEGER;

// Data Type: Null
// Using let because a null value is often reassigned later in real applications.
let emptyValue = null;

// Display all variables in the consol.
console.log("==== Challenge 1 Output ====");
console.log("Full Name:", fullName);
console.log("Age:", age);
console.log("Enjoys JavaScript:", enjoysJavaScript);
console.log("Favourite Temperature:", favouriteTemperature);
console.log("Invalid Number:", invalidNumber);
console.log("Infinite Value:", infiniteValue);
console.log("Max Safe:", maxSafeInteger);
console.log("Empty Value:", emptyValue);

/* Interview Answers 
1. The most important difference is that let is block scoped, while var is function scoped. This means a variable declared with let only exists inside the block where it was created, making code safer and easier to understand.

2. I should default to const because it prevents accidental reassignment and makes my code more predictable. I only use let when I know the value needs to change during program execution.

3. The name userNm is difficult to read and understand. I would rename it to userName because it is description and follows common naming conventions. Good variable names make code easier to maintain, debug, and understand for other developers working on the project.

*/

/* Console Output 

==== Challenge 1 Output ====
Full Name: Joy Molomo
Age: 22
Enjoys JavaScript: true
Favourite Temperature: 22.5
Invalid Number: NaN
Infinite Value: Infinity
Max Safe Integer: 9007199254740991
Empty Values: null


*/


// Challenge 2: Explain typeof and its surprises
console.log("==== Challenge 2 Output ====");

// Checking the data types of the variables from Challenge 1
// The typeof operator helps developers identify what data type a value currently contains.

console.log("typeof fullName:", typeof fullName);
console.log("typeof age:", typeof age);
console.log("tyepof enjoysJavaScript:", typeof enjoysJavaScript);
console.log("typeof favouriteTemperature:", typeof favouriteTemperature);
console.log("tyepof invalidNumber:", typeof invalidNumber);
console.log("typeof infiniteValue:", typeof infiniteValue);
console.log("typeof  maxSafeInteger:", typeof maxSafeInteger);
console.log("typeof emptyValue:", typeof emptyValue);

// Additional typeof examples 
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof NaN:", typeof NaN);
console.log("typeof 42:", typeof "42");
console.log("typeof (typeof 42):", typeof (typeof 42));
console.log("typeof [1, 2, 2]:", typeof [1, 2, 3]);
console.log("typeof function() {}:", typeof function () {});


/* Unexpected result

1. typeof null returns "object"
I expected null to return to "null".
However, JavaScript returns "object".
This is a well-known historical bug that has existed since the early days of JavaScript.
Because changing it would break existing websites, the behavior remains.

2. typeof NaN returns "number"
NaN means "Not a Number", I expected the result to be "NaN".
However, NaN is considered a special numeric value used to represent a failed mathematical operation.

3. typeof [1, 2, 3] returns "object"
Arrays are a special type of object in JavaScrip. 
If you need to specifically check whether something is an array, use Array.isArray(value).

4. typeof (typeof 42) returns "string"
The first typeof returns the string "number".
The second typeof checks the type of that result.
Since "number" is text, the final answer is "string".

*/

/* Interview answer 

typeof NaN returns "number" because NaN is technically
a special numeric value used to represent an invalid
mathematical result. Even though the name means 
"Not a Number", JavaScript still classifies it as 
part of the number data type.

typeof null returns "object" because of a historical bug
in JavaScript's original implementation. The
behavior was discovered many years ago, but changing it would
break existing code on millions of websites.
As a result, the language continues to preserve this 
behavior for backward compatibility.
*/

/* Console Output 

==== Challenge 2 Output ====
typeof fullName: string 
typeof age: number
typeof enjoysJavaScript: boolean
typeof favouriteTemperature: number
typeof invalidNumber: number
typeof infiniteValue: number
typeof maxSafeInteger: number
typeof emptyValue: object
typeof undefined: undefined
typeof null: object
typeof NaN: number
typeof "42": string
typeof (typeof 42): string
typeof [1, 2, 3]: object
typeof function() {}: function
*/

