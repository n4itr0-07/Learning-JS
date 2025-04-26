// Rejection Handling using await and try catch

async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Data fetch failed!")), 2000); // Simulate a 2-second delay
  });

  try {
    let result = await promise; // Wait for the promise to resolve
    console.log(result); // This line won't be executed if the promise is rejected
  } catch (error) {
    console.error(error.message); // Output: Data fetch failed!
  }
}

fetchData(); // Call the async function
