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



// Challenge 3: Convert this string to a number, in five different ways

// These are the starting values provided by the challenge.
let a = "123";
let b = "3.14";
let c = "hello";
let d = "42abc";
let e = "";
let f = 0; 
let g = null;
let h = undefined;

// This helper function redueces repeated code. 
// It applies all required conversions and displays both the converted value and its data type.
function showConversions(variableName, value) {
    console.log('\n===== ${variableName}:, value} =====');
    console.log("Original Value:", value);
    console.log("Original Type:", typeof value);

    console.log(
        "Number():",
        Number(value),
        "| Type:",
        typeof Number(value)
    );

    console.log(
        "parseInt():",
        parseInt(value),
        "| Type:",
        typeof parseInt(value)
    );

    console.log(
        "parseFloat():",
        parseFloat(value),
        "| Type:",
        typeof parseFloat(value)
    );

    console.log(
        "Boolean():",
        Boolean(value),
        "| Type:",
        typeof Boolean(value)
    );

    console.log(
        "String():",
        String(value),
        "| Type:",
        typeof String(value)
    );

    console.log(
        "String():",
        String(value),
        "| Type:",
        typeof String(value)
    );
}

console.log("\n===== Challenge 3 Output =====");

// Conversions for every starting value
showConversions("a = '123'", a);
showConversions("b = '3.14'", b);
showConversions("c = 'hello'", c);
showConversions("d = '42abc'", d);
showConversions("e =''", e);
showConversions("f = 0", f);
showConversions("g = null", g);
showConversions("h = undefined", h);

/* Interview answers

1. Number ('42abc') returns NaN because the entire string 
   must be a valid number for Number() to succeed.
   parseInt('42abc') returns 42 because parseInt reads
   from left to right and stops converting when it reaches a
   non-numeric character.
   Example:
   Number('42abc')  //NaN
   parseInt('42abc') // 42

   2. I would sue parseFloat when decimal values are valid and important.
      Example: prices, measurements, temperatures, weights, and percentages often contain decimal places.
      Example: 
      parseFloat('19.99')  // 19.99
      parseInt('19.99')    // 19

      3. Number ('') returns 0. JavaScript converts it to zero.
         This can create bugs when a user submits a blank form field
         and the application treats the empty value as a real number.
*/

/* Console Output

===== Challenge 3 Output =====

====== a = '123' =====
Original Value: 123
Original Type: string
Number(): 123 | Type: number
parseInt(): 123 | Type: number
parseFloat(): 123 | Type: number
Boolean(): true | Type: boolean
String(): 123 | Type: string

===== b = '3.14' =====
Original Value: 3.14
Original Type: string
Number(): 3.14 | Type: number
parseInt(): 3.14 | Type: number
parseFloat(): 3.14 | Type: number
Boolean(): true | Type: boolean
String(): 3.14 | Type: string

===== c = 'hello' =====
Original Value: hello
Original Type: string
Number(): NaN | Type: number
parseInt(): NaN | Type: number
parseFloat(): NaN | Type: number
Boolean(): true | Type: boolean
String(): hello | Type: string

===== d = '42abc' =====
Original Value: 42abc
Original Type: string
Number(): NaN | Type: number
parseInt(): 42 | Type: number
parseFloat(): 42 | Type: number
Boolean(): true | Type: boolean
String(): 42abc| Type: string

===== e = '' =====
Original Value: hello
Original Type: string
Number(): 0 | Type: number
parseInt(): NaN | Type: number
parseFloat(): NaN | Type: number
Boolean(): false | Type: boolean
String():  | Type: string

===== f = 0 =====
Original Value: 0
Original Type: number
Number(): 0 | Type: number
parseInt(): 0 | Type: number
parseFloat(): 0 | Type: number
Boolean(): false | Type: boolean
String(): 0 | Type: string

===== g = 'null' =====
Original Value: null
Original Type: object
Number(): 0 | Type: number
parseInt(): NaN | Type: number
parseFloat(): NaN | Type: number
Boolean(): false | Type: boolean
String(): null | Type: string

===== h = undefined =====
Original Value: undefined
Original Type: undefined
Number(): NaN | Type: number
parseInt(): NaN | Type: number
parseFloat(): NaN | Type: number
Boolean(): false | Type: boolean
String(): undefined | Type: string
 */


// Challenge 4: What does this print, And Why?
 
console.log("\===== Challenge 4 Output =====");

// Expression 1: "5" + 3
// Prediction:
// Output: "53"
// Type: string 
// Why: The + operator performs string concatenation when one operand is a string.
console.log('"5" + 3 =', "5" + 3);

// Expression 2: "5" - 3
// Prediction:
// Output: 2
// Type: number
// Why: The - operator forces numeric conversion.
console.log('"5" - 3 =', "5" - 3);

// Expression 3: "5" * "2"
// Prediction:
// Output: 10
// Type: number
// Why: Multiplication forces both values to numbers.
console.log('"5" * "2" =', "5" * "2");

// Expression 4: true + 1
// Prediction:
// Output: 2
// Type: number
// Why: true converts to 1
console.log("true + 1 =", true + 1);

// Expression 5: true + "1"
// Prediction:
// Output: 0
// Type: number
// Why: String concatenation occurs.
console.log('true + "1" =', true + "1");

// Expression 6: false + null
// Prediction:
// Output: 0
// Type: number
// Why: false becomes 0 and null becomes 0.
console.log("false + null =", false + null);

// Expression 7: null + undefined
// Prediction:
// Output: NaN
// Type: number
// Why: undefined cannot converted into a valid number.
console.log("null + undefined =", null + undefined);

// Expression 8: 1/0
// Prediction:
// Output: Infinity
// Type: number
// Why: Division by zero produces Infinity.
console.log("1/0 =", 1/0);

// Expression 9: 0/0
// Prediction:
// Output: NaN
// Type: number
// Why: Zero divided by zero is undefine mathematically.
console.log("0/0 =", 0/0);

// Expression 10: "abc" -1
// Prediction:
// Output: NaN
// Type: number
// Why: "abc" cannot be converted into a number.
console.log('"abc" - 1 =', "abc" - 1);

// Expression 11: [] + []
// Prediction:
// Output: ""
// Type: string
// Why: Empty arrays become empty strings.
console.log("[] + [] =", [] + []);


// Expression 12: [1] + [2]
// Prediction:
// Output: "12"
// Type: string
// Why: Arrays convert to strings before concatenation.
console.log("[1] + [2] =", [1] + [2]);

/* Interview explanation 

Many of these examples demonstrate JavaScript's automatic
type coercion. JavaScript often attempts to convert values
to compatible data types before performing an operation.

The + operator is special because it is used for both
addition and string concatenation. If one value is a
string, JavaScript often converts the other value to a 
string as well.

Mathematical operators such as -, *, and / force numeric
conversion. If JavaScript cannot convert a value into a valid number, the result becomes NaN.

Arrays are objects, but when used with the + operator
they are converted to strings using their string representation.

*/

/* Console Output 

===== Challenge 4 Output ====
"5" + 3 = 53
"5" - 3 = 2
"5" * "2" = 10
true + 1 = 2
true + "1" = true1 
false + nunll = 0
null + undefined = NaN 
1 / 0 = Infinity
0 / 0 = NaN
*/
