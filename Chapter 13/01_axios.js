/*
TODO: Axios:
- Install axios
- Import axios
- Create a function that fetches data from a public API using axios
- Use async/await to handle the promise returned by axios
- Log the response data to the console
- Handle errors using try/catch
- Use axios to make a GET request to the JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts)
- Log the response data to the console
- Handle errors using try/catch

*/

import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
