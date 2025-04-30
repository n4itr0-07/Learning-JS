import axios from "axios";

const url = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url);
    console.log(res.data.joke);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getJokes();