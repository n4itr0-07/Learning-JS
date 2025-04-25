async function greet() {    // async function declaration 
    return "Hello, World!";
}

greet()
.then((result) => {
    console.log(result); // Output: Hello, World!
});


let demo = async () => {
    return 5;
}