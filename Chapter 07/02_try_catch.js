/*
                            Try & Catch

    - The try statement lets you test a block of code for errors.
    - The catch statement lets you handle the error.
    - The throw statement lets you create custom errors.
    - The finally statement lets you execute code, after try and catch, regardless of the result.

    - When an error occurs, JavaScript will normally stop and generate an error message.
    - The technical term for this is: JavaScript will throw an exception (throw an error).

    - JavaScript will actually create an Error object with two properties: name and message.

    - You can use the try statement to test code for errors.
    - The try statement allows you to define a block of code to be tested for errors while it is being executed
    - The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
    - The throw statement allows you to create a custom error.
    - The finally statement lets you execute code, after try and catch, regardless of the result.
    
    - The try and catch statements come in pairs:
        - You cannot use try alone.
        - You cannot use catch alone.
        - You cannot use finally alone.

    - The try statement must be followed by either exactly one catch block or one finally block (or both).
    - The catch block catches the errors.
    - The finally block lets you execute code, after try and catch, regardless of the result.

    - The throw statement lets you create custom errors.
    - The throw statement is used together with an exception (Error) object.
    - You can use the throw statement to throw an exception (an error).

    - The finally statement lets you execute code, after try and catch, regardless of the result.


    TODO: The try statement allows you to define a block of code to be tested for errors while it is being executed.
    
    TODO: The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

    TODO: The throw statement allows you to create a custom error.

    TODO: The finally statement lets you execute code, after try and catch, regardless of the result.
    
*/

// Example 1: try and catch
try {
  // Block of code to try
  console.log("Hello World!");
} catch (error) {
  // Block of code to handle errors
  console.error(error);
}

// Example 2: throw
try {
  // Block of code to try
  throw "An error occurred!";
} catch (error) {
  // Block of code to handle errors
  console.error(error);
}

// Example 3: finally

try {
  // Block of code to try
  console.log("Hello World!");
} catch (error) {
  // Block of code to handle errors
  console.error(error);
} finally {
  // Block of code to be executed regardless of the try / catch result
  console.log("Finally block executed!");
}

// ------------------------------------------------------------------------------------------

try {
  console.log(a);
} catch (error) {
  console.error("An error occurred: " + error);
} // finally {
//  console.log("Finally block executed!");
// }
