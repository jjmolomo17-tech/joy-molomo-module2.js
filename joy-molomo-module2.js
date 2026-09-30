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
