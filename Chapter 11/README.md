# 🧠 **JavaScript Execution Flow – Call Stack, Promises, and Async Handling**

---

## 🚀 **1. JavaScript Call Stack – Introduction**

The **Call Stack** is where **JavaScript tracks function execution**.  
- It uses a **LIFO (Last-In, First-Out)** structure.  
- Functions are pushed onto the stack when invoked, and popped off when returned.

---

### 🔹 Example

```javascript
function a() {
  b();
}
function b() {
  console.log("Hello");
}
a();
```

**Call Stack:**

```text
Initial:
[]

Step 1:
[a] → function a called

Step 2:
[a, b] → function b called

Step 3:
[a] → b finished

Step 4:
[] → a finished
```

---

## 🔍 **2. Visualizing the Call Stack**

### 🔹 Use Chrome DevTools
1. Open DevTools → Sources tab  
2. Set **breakpoints** (click line number)  
3. Step through using **F10 (step over)** and **F11 (step into)**  
4. Watch the **Call Stack panel** update in real-time  

---

## 🐛 **3. Breakpoints**

Breakpoints pause execution for debugging.

### 🔹 How to Use:
```javascript
function greet() {
  debugger; // Pauses here
  console.log("Hi");
}
greet();
```

OR use the browser DevTools > Sources > Click line number

---

## 🧵 **4. JavaScript is Single-Threaded**

JavaScript executes **one thing at a time** on a **single thread**.  
It handles **asynchronous operations** via:
- **Event Loop**
- **Callback Queue**
- **Microtask Queue**

---

## 😵 **5. Callback Hell**

Occurs when **many nested callbacks** make code unreadable and hard to manage.

### 🔹 Example:

```javascript
login(user, function () {
  getData(function () {
    updateUI(function () {
      console.log("Done!");
    });
  });
});
```

🙅 Problem: Hard to debug, scale, or test.

---

## 🌈 **6. Promises – Cleaner Async Code**

A **Promise** represents a value that may be available **now, later, or never**.

### 🔹 States:
- `pending` (initial)
- `fulfilled` (resolved)
- `rejected` (error)

---

## ✅ **7. Using `.then()` and `.catch()`**

```javascript
let promise = new Promise(function (resolve, reject) {
  let success = true;
  if (success) {
    resolve("It worked!");
  } else {
    reject("Error occurred!");
  }
});

promise
  .then(result => console.log(result))      // "It worked!"
  .catch(error => console.error(error));    // On rejection
```

---

## 🔗 **8. Promise Chaining**

Allows you to **run async tasks in sequence**.

### 🔹 Example:

```javascript
fetchUser()
  .then(user => fetchProfile(user))
  .then(profile => updateUI(profile))
  .catch(err => handleError(err));
```

✅ **Each `.then()` returns a new promise**, allowing chaining.

---

## 📦 **9. Getting Results & Errors from Promises**

### 🔹 Fulfilled Promise:
```javascript
Promise.resolve("All good").then(console.log); // "All good"
```

### 🔹 Rejected Promise:
```javascript
Promise.reject("Oops!").catch(console.error); // "Oops!"
```

---

## 🧠 Real Case Scenarios for Bug Bounty / Pentesting

---

### 🎯 1. **DOM XSS in Callback-Based Loaders**
Older loaders use nested callbacks (XHR/JSONP):
```javascript
loadScript(url, function (data) {
  eval(data);  // 🚨 Dangerous Sink
});
```
✅ **Inject script inside `data` → DOM XSS**

---

### 🎯 2. **Callback Hell = Logic Confusion = Bypasses**
Misordered callbacks or early returns may lead to:
- Broken authentication
- Authorization bypass
- Token reuse

---

### 🎯 3. **Race Conditions in Promises**
Multiple unresolved Promises can allow race attacks:
```javascript
Promise.all([transferFunds(), changeRole()]); // 🔥 Can race!
```

✅ Try manipulating API requests to control timing.

---

### 🎯 4. **Promise Rejection Not Handled**
Uncaught errors expose stack traces or break logic:
```javascript
fetch("data.json").then(res => res.json());
// 🚫 No `.catch()` leads to app crash
```

✅ Bug bounty tip: Trigger 404 or malformed JSON.

---

### 🎯 5. **Async Injection via then() Chain**
Some apps use user input to decide next Promise:
```javascript
const nextStep = input; // attacker controls input
promise.then(window[nextStep]);  // 🚨 Call any global function
```

✅ Inject `alert` or `fetch` as function name.

---

## 🧠 Summary

| Concept             | Description                                  |
|---------------------|----------------------------------------------|
| **Call Stack**       | JS function tracker (LIFO structure)         |
| **Single-Threaded**  | One thing at a time, async via callbacks     |
| **Callback Hell**    | Too many nested callbacks – hard to maintain |
| **Promises**         | Cleaner async handling, supports chaining    |
| **`.then()`**        | Handles success of promise                   |
| **`.catch()`**       | Handles errors in promise                    |
| **Promise chaining** | Sequential execution of async logic          |
| **Errors & Results** | `.resolve()`, `.reject()` → handle with `.then()` or `.catch()` |

---

## 🔮 Next Steps

🔹 Explore **`async/await`** for modern async coding  
🔹 Use **DevTools** to inspect **Call Stack + Breakpoints**  
🔹 Practice writing and breaking async flows in CTF apps  
🔹 Audit third-party scripts that use `eval`, `setTimeout(string)`, or `then()` chaining dynamically  

