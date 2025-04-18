let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  //TODO: Extracting form data
  let inp = document.querySelector("input");
  //console.log(inp);
  console.dir(inp); // Log the input element to the console

 // console.log(inp.value); // Log the value of the input element to the console

  let user = document.querySelector("#usr");
  let pass = document.querySelector("#pass");

  console.log(usr.value); // Log the value of the input element to the console

  console.log(pass.value); // Log the value of the input element to the console

  alert(`Hi ${usr.value}, your password is ${pass.value}`); // Show an alert with the input values
});
