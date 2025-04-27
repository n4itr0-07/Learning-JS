let url = "https://catfact.ninja/fact";

fetch(url)
  .then((response) => {
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    console.log("data1 = ", data.fact); // Log the data to the console
    returnfetch(url);
  })
  .then((response) => {
    return response.json(); // Parse the JSON from the response
  })

  .then((data2) => {
    console.log("data2 = ", data2.fact); // Log the data to the console
  })

  .catch((err) => {
    console.log("Error: ", err);
});
// The above code is a simple example of how to make a GET request using the Fetch API in JavaScript.
