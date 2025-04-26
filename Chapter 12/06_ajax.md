# Learning Ajax: A Simple Guide

Ajax (Asynchronous JavaScript and XML) is a technique for creating fast and dynamic web pages. It allows web applications to send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page.

---

## **How Ajax Works**
1. A user triggers an event (e.g., clicking a button).
2. JavaScript creates an XMLHttpRequest object.
3. The request is sent to the server.
4. The server processes the request and sends back a response.
5. JavaScript processes the response and updates the web page dynamically.

---

## **Key Components of Ajax**
1. **XMLHttpRequest (XHR)**: The core object used to interact with servers.
2. **Server**: Processes requests and sends responses (e.g., JSON, XML, or plain text).
3. **JavaScript**: Handles the request and updates the DOM.

---

## **Basic Ajax Example**

Here’s a simple example of using Ajax to fetch data from a server:

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajax Example</title>
</head>
<body>
  <h1>Ajax Example</h1>
  <button id="loadData">Load Data</button>
  <div id="result"></div>

  <script src="script.js"></script>
</body>
</html>