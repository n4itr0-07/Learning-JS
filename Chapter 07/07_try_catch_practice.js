function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed!"); // Throw an error
        }
        console.log(`Result: ${a / b}`); // Perform division if no error
    } catch (error) {
        console.error(`Caught an error: ${error.message}`); // Handle the error
    } finally {
        console.log("Execution completed."); // Executes no matter what
    }
  }
  
  // Test cases
  divideNumbers(10, 2); // Normal case
  divideNumbers(10, 0); // Error case
  