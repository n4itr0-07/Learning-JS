# 🚀 **JavaScript Async Programming + API Access & Testing – Full Beautiful Notes**

---

## 📚 **1. Async Functions**

An `async` function **returns a Promise** automatically.  
It **allows writing asynchronous code in a synchronous style**.

### 🔹 Syntax:
```javascript
async function greet() {
    return "Hello";
}
greet().then(alert);  // Shows "Hello"
```

✅ **Behind the scenes**, `async function` wraps return values in a Promise.

---

## 🕒 **2. Await Keyword**

- `await` **pauses** the function execution **until the Promise resolves**.
- Only valid **inside `async` functions**.

### 🔹 Example:
```javascript
async function getData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
}
getData();
```

✅ **`await` makes code clean and flat**, avoiding `.then()` chains.

---

## ⚡ **3. Handling Rejections in Async/Await**

Use `try...catch` to **handle errors** with `await`.

```javascript
async function fetchUser() {
    try {
        let response = await fetch('https://api.fakeurl.com/user');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch:", error);
    }
}
```

✅ **Never forget error handling**, otherwise uncaught errors crash the app!

---

## 🌐 **4. What is an API?**

API = **Application Programming Interface**.

- It allows **communication between client (browser) and server**.
- You **send requests** (e.g., for data) and **receive responses** (data, errors).

Example APIs:
- Weather API
- Crypto Prices API
- News API
- Movie Databases

---

## 🆓 **5. Accessing Some Free APIs**

| API           | Description                  | Endpoint Example                   |
|---------------|-------------------------------|-------------------------------------|
| JSONPlaceholder | Fake REST API for testing  | `https://jsonplaceholder.typicode.com/posts` |
| Dog API       | Random dog pictures           | `https://dog.ceo/api/breeds/image/random` |
| OpenWeather   | Weather data                  | `https://api.openweathermap.org/data/2.5/weather` |
| CoinGecko     | Crypto prices                 | `https://api.coingecko.com/api/v3/coins/markets` |

🔗 Use **fetch()** or **Axios** to interact.

---

## 📦 **6. What is JSON?**

**JSON (JavaScript Object Notation)** is a **data format** used to exchange data between server and client.  
- Text-based.
- Lightweight.
- Easy for machines and humans to read.

Example JSON:
```json
{
  "name": "Alice",
  "age": 25,
  "isStudent": false
}
```

---

## 🛠 **7. Accessing JSON Data**

After a `fetch()` call, use `.json()` method to parse the response:

```javascript
async function fetchUser() {
    let response = await fetch('https://api.example.com/user');
    let jsonData = await response.json();
    console.log(jsonData.name);
}
```

✅ **Always await `response.json()` to get usable data**.

---

## 🧪 **8. API Testing Tools**

| Tool          | Purpose                   |
|---------------|----------------------------|
| Postman       | API request building & testing |
| Insomnia      | Lightweight API client     |
| Hoppscotch    | Open-source API testing    |
| Burp Suite    | Advanced API pentesting (Bug bounty focused) |

✅ Use Postman for quick tests, Burp Suite for security audits.

---

## 📡 **9. What is AJAX?**

**AJAX (Asynchronous JavaScript and XML)** lets you **send/receive data from servers** without reloading the entire page.

✅ Modern AJAX uses **fetch()** or libraries like **Axios** (not old `XMLHttpRequest`).

### 🔹 Example with `fetch()`
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 📬 **10. HTTP Verbs**

| Verb    | Purpose                  |
|---------|---------------------------|
| `GET`   | Retrieve data (safe)      |
| `POST`  | Submit new data           |
| `PUT`   | Update/replace existing data |
| `PATCH` | Partially update data     |
| `DELETE`| Delete data               |

✅ **Always use the correct HTTP method** for better API behavior and security.

---

## 📈 **11. Status Codes**

| Code    | Meaning                             |
|---------|-------------------------------------|
| 200     | OK (Success)                        |
| 201     | Created (POST successful)           |
| 400     | Bad Request (Client error)           |
| 401     | Unauthorized (Login required)       |
| 403     | Forbidden (No permission)           |
| 404     | Not Found                           |
| 500     | Internal Server Error (Server crash) |

✅ Always **check the status code** after API responses!

```javascript
if (response.status === 200) {
    console.log("Success!");
} else {
    console.error("Failed:", response.status);
}
```

---

## 🌍 **12. Adding Information in URLs (Query Strings)**

To **send parameters in GET request**, append them to the URL:

```javascript
const city = "London";
fetch(`https://api.example.com/weather?city=${city}`);
```

🔗 `?` starts query parameters. Use `&` to chain multiple parameters.

Example:
```
https://api.example.com/search?name=alice&age=25
```

---

## 🛡️ **13. HTTPS Headers**

Headers carry **extra information** between client and server.  
You can set headers in a `fetch()` request.

### 🔹 Common Headers:

| Header              | Purpose                       |
|---------------------|-------------------------------|
| `Content-Type`       | Type of data sent (`application/json`) |
| `Authorization`      | API Key, Token Authentication  |
| `Accept`             | What response format is expected |

### 🔹 Setting Custom Headers
```javascript
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN_HERE'
    },
    body: JSON.stringify({ name: "Alice" })
});
```

---

# 🧠 Real Case Scenarios for Pentesting and Bug Bounty  

---

### 🎯 1. **Broken API Error Handling (Promise rejection)**
- API fails, but app doesn’t catch `.catch()`, leaks server info.
- 🔥 **Exploit:** Trigger a 500 error, watch verbose errors.

---

### 🎯 2. **API Key Exposure via Bad Headers**
- API keys hardcoded in JS files.
- 🔥 **Exploit:** View source or network requests → find Authorization headers.

---

### 🎯 3. **Query String Injection**
- No input validation in API parameters.
```javascript
https://example.com/search?q=<script>alert(1)</script>
```
- 🔥 **Exploit:** DOM XSS via unfiltered search fields.

---

### 🎯 4. **HTTP Verb Tampering**
- Backend accepts `POST`, but also accepts `PUT/DELETE` improperly.
- 🔥 **Exploit:** Change method in Burp Suite → delete/modify others' resources.

---

### 🎯 5. **Improper Status Code Handling**
- 403 forbidden might still leak sensitive info in response body.
- 🔥 **Exploit:** Analyze blocked responses for data leakage.

---

# 📦 Summary  

| Concept               | Key Point                                 |
|-----------------------|-------------------------------------------|
| Async Function        | Always returns a Promise                 |
| Await                 | Waits for Promise resolution             |
| JSON                  | Text data format for APIs                |
| API Testing Tools     | Postman, Burp Suite, Hoppscotch           |
| HTTP Verbs            | GET, POST, PUT, PATCH, DELETE             |
| Status Codes          | 200 OK, 404 Not Found, 500 Server Error    |
| Query Strings         | `?key=value` attached to URLs            |
| HTTPS Headers         | Metadata for requests/responses          |

---

