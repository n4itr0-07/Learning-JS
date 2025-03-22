// Lexical scope is a concept that describes how a variable is resolved in nested functions. The inner function has access to the variables and parameters of the outer function. However, the outer function does not have access to the variables and parameters of the inner function.

function outerFunction() {
    let outerVariable = "I'm the outer function!";
    console.log(outerVariable);
    function innerFunction() {
        let innerVariable = "I'm the inner function!";
        console.log(outerVariable);
        console.log(innerVariable);
    }
    innerFunction();
}
outerFunction();
// In this example, the innerFunction has access to the outerVariable declared in the outerFunction. However, the outerFunction does not have access to the innerVariable declared in the innerFunction.
