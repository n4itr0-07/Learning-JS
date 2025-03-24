/*
                    Set Timeout
                    ------------
    - setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    - The setTimeout() method returns an ID which can be used to refer to the timer that is set.
    - clearTimeout() method stops the execution of the function specified in setTimeout().
    - The clearTimeout() method requires the ID returned by setTimeout().
    - The ID value returned by setTimeout() is used as the parameter for the clearTimeout() method.
    - The clearTimeout() method can be used to prevent the function specified in setTimeout() from executing.
    - The clearTimeout() method stops the execution of the function specified in setTimeout().
    - The clearTimeout() method requires the ID value returned by setTimeout().
    - The clearTimeout() method can be used to prevent the function specified in setTimeout() from executing.
*/

console.log("hi there!");

setTimeout(() => {
    console.log("Hello World!");
}, 3000); // 3000 milliseconds = 3 seconds

console.log("bye!"); 