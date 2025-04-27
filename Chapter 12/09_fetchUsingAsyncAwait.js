let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json(); // Parse the JSON from the response
    console.log("data1 = ", data.fact); // Log the data to the console

    let res2 = await fetch(url);
    let data2 = await res2.json(); // Parse the JSON from the response
    console.log("data2 = ", data2.fact); // Log the data to the console
  } catch (err) {
    console.log("Error: ", err); // Log the error to the console
  }
}
getFacts(); // Call the function to get the facts
